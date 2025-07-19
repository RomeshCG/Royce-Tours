import { supabase } from '../../lib/supabase'
import type { SignUpData, SignInData, User } from '../../lib/types'

export class AuthService {
  // Sign up a new user
  static async signUp(data: SignUpData): Promise<{ user: any; error: any }> {
    try {
      const { data: authData, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            first_name: data.first_name,
            last_name: data.last_name,
          },
        },
      })

      if (error) {
        console.error('AuthService: Sign up error:', error)
        throw error
      }

      return { user: authData.user, error: null }
    } catch (error) {
      console.error('AuthService: Sign up error:', error)
      return { user: null, error }
    }
  }

  // Sign in existing user
  static async signIn(data: SignInData): Promise<{ user: any; error: any }> {
    try {
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      })

      if (error) {
        console.error('AuthService: Sign in error:', error)
        throw error
      }

      return { user: authData.user, error: null }
    } catch (error) {
      console.error('AuthService: Sign in error:', error)
      return { user: null, error }
    }
  }

  // Sign out user
  static async signOut(): Promise<{ error: any }> {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      return { error: null }
    } catch (error) {
      console.error('AuthService: Sign out error:', error)
      return { error }
    }
  }

  // Get current user
  static async getCurrentUser(): Promise<{ user: any; error: any }> {
    try {
      const { data: { user }, error } = await supabase.auth.getUser()
      if (error) throw error
      return { user, error: null }
    } catch (error) {
      console.error('AuthService: Get current user error:', error)
      return { user: null, error }
    }
  }

  // Get user profile from profiles table
  static async getUserProfile(userId: string): Promise<{ profile: User | null; error: any }> {
    try {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) {
        console.error('AuthService: Get profile error:', error)
        throw error
      }

      return { profile, error: null }
    } catch (error) {
      console.error('AuthService: Get user profile error:', error)
      return { profile: null, error }
    }
  }

  // Update user profile
  static async updateUserProfile(userId: string, updates: Partial<User>): Promise<{ profile: User | null; error: any }> {
    try {
      const { data: profile, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', userId)
        .select()
        .single()

      if (error) throw error
      return { profile, error: null }
    } catch (error) {
      console.error('AuthService: Update user profile error:', error)
      return { profile: null, error }
    }
  }

  // Check if user is admin using JWT claims
  static async isAdmin(userId: string): Promise<boolean> {
    try {
      // First try to get the role from JWT claims
      const { data: { user } } = await supabase.auth.getUser()
      if (user?.app_metadata?.role === 'admin') {
        return true
      }

      // Fallback to checking the profile table (but this might cause issues)
      const { profile } = await this.getUserProfile(userId)
      return profile?.role === 'admin'
    } catch (error) {
      console.error('AuthService: Check admin status error:', error)
      return false
    }
  }

  // Listen to auth state changes
  static onAuthStateChange(callback: (event: string, session: any) => void) {
    return supabase.auth.onAuthStateChange(callback)
  }

  // Get user role from JWT
  static async getUserRole(): Promise<string | null> {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      return user?.app_metadata?.role || null
    } catch (error) {
      console.error('AuthService: Get user role error:', error)
      return null
    }
  }
} 