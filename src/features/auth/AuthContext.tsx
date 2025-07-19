import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthService } from './authService'
import type { User, SignUpData, SignInData } from '../../lib/types'

interface AuthContextType {
  user: User | null
  loading: boolean
  signUp: (data: SignUpData) => Promise<{ user: any; error: any }>
  signIn: (data: SignInData) => Promise<{ user: any; error: any }>
  signOut: () => Promise<{ error: any }>
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)

  const loadUserProfile = async (userId: string) => {
    try {
      const { profile, error } = await AuthService.getUserProfile(userId)
      if (error) {
        console.error('Error loading profile:', error)
        return null
      }
      if (profile) {
        setUser(profile)
        // Check admin status from JWT first, then fallback to profile
        const jwtRole = await AuthService.getUserRole()
        const isUserAdmin = jwtRole === 'admin' || profile.role === 'admin'
        setIsAdmin(isUserAdmin)
        return profile
      }
      return null
    } catch (error) {
      console.error('Error in loadUserProfile:', error)
      return null
    }
  }

  const checkAdminStatus = async (authUser: any) => {
    try {
      // First check JWT claims
      const jwtRole = await AuthService.getUserRole()
      if (jwtRole === 'admin') {
        setIsAdmin(true)
        return
      }

      // Fallback to profile check (but be careful of recursion)
      if (authUser) {
        const { profile } = await AuthService.getUserProfile(authUser.id)
        setIsAdmin(profile?.role === 'admin' || false)
      }
    } catch (error) {
      console.error('Error checking admin status:', error)
      setIsAdmin(false)
    }
  }

  useEffect(() => {
    // Get initial user
    const getInitialUser = async () => {
      try {
        const { user: authUser, error } = await AuthService.getCurrentUser()
        if (error) {
          console.error('Error getting current user:', error)
          setLoading(false)
          return
        }
        
        if (authUser) {
          await loadUserProfile(authUser.id)
          await checkAdminStatus(authUser)
        }
      } catch (error) {
        console.error('Error getting initial user:', error)
      } finally {
        setLoading(false)
      }
    }

    getInitialUser()

    // Listen to auth state changes
    const { data: { subscription } } = AuthService.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          // Wait a bit for the profile to be created by the trigger
          setTimeout(async () => {
            await loadUserProfile(session.user.id)
            await checkAdminStatus(session.user)
          }, 500)
        } else if (event === 'SIGNED_OUT') {
          setUser(null)
          setIsAdmin(false)
        }
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (data: SignUpData) => {
    const result = await AuthService.signUp(data)
    if (result.user) {
      // Profile will be created by the database trigger
      // We'll need to wait a moment for it to be created
      setTimeout(async () => {
        await loadUserProfile(result.user.id)
        await checkAdminStatus(result.user)
      }, 1000)
    }
    return result
  }

  const signIn = async (data: SignInData) => {
    const result = await AuthService.signIn(data)
    if (result.user) {
      await loadUserProfile(result.user.id)
      await checkAdminStatus(result.user)
    }
    return result
  }

  const signOut = async () => {
    const result = await AuthService.signOut()
    setUser(null)
    setIsAdmin(false)
    return result
  }

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signOut,
    isAdmin,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
} 