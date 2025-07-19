import React, { useState } from 'react'
import SignInForm from '../features/auth/SignInForm'
import SignUpForm from '../features/auth/SignUpForm'
import { useAuth } from '../features/auth/AuthContext'
import { useNavigate } from 'react-router-dom'

const Auth: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const { user } = useAuth()
  const navigate = useNavigate()

  // Redirect if already authenticated
  React.useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        navigate('/admin')
      } else {
        navigate('/')
      }
    }
  }, [user, navigate])

  const handleAuthSuccess = () => {
    // The AuthContext will handle the redirect
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Royce Tours</h1>
          <p className="text-gray-600">
            {isSignIn ? 'Welcome back! Please sign in to your account.' : 'Create your account to get started.'}
          </p>
        </div>

        {isSignIn ? (
          <SignInForm
            onSuccess={handleAuthSuccess}
            onSwitchToSignUp={() => setIsSignIn(false)}
          />
        ) : (
          <SignUpForm
            onSuccess={handleAuthSuccess}
            onSwitchToSignIn={() => setIsSignIn(true)}
          />
        )}
      </div>
    </div>
  )
}

export default Auth 