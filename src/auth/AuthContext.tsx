import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
  useContext,
} from 'react'

import { Auth, Hub } from 'aws-amplify'
import { signInButton, signInButtonContent } from '@aws-amplify/ui'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib-esm/types/Auth'

interface AuthContext {
  isAuthenticated: boolean
  loading: boolean
  user: any
  error: any
  signOut(): void
  getAuthToken(): string
  SignInButton: (opts?: { label?: string }) => React.ReactElement
  clearAuthError: () => void
}
interface AuthProviderOptions {
  children: React.ReactElement
}
/**
 * Handle user authentication and related features.
 *
 *
 * @see https://aws-amplify.github.io/amplify-js/api/classes/authclass.html
 * @see https://aws-amplify.github.io/amplify-js/api/classes/hubclass.html
 * @see https://aws-amplify.github.io/docs/js/hub#listening-authentication-events
 * @see https://github.com/aws-amplify/amplify-js/blob/master/packages/amazon-cognito-identity-js/src/CognitoUser.js
 */

export const AuthContext = React.createContext<AuthContext | null>(null)

export const useAuth = () => useContext(AuthContext)!

export const AuthProvider = ({ children }: AuthProviderOptions) => {
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [error, setError] = useState(null)

  const refreshState = useCallback(async () => {
    setLoading(true)
    try {
      const user = await Auth.currentAuthenticatedUser()
      setUser(user)
      setIsAuthenticated(_isAuthenticated(user))
      setError(null)
      setLoading(false)
    } catch (err) {
      setUser(null)
      setIsAuthenticated(false)
      if (err === 'not authenticated') {
        setError(null)
      } else {
        console.log(err)
        setError(err)
      }
      setLoading(false)
    }
  }, [])

  // Make sure our state is loaded before first render
  useLayoutEffect(() => {
    refreshState()
    return () => {}
  }, [refreshState])

  // Subscribe to auth events
  useEffect(() => {
    let isMounted = true
    const handler = ({ payload }: any) => {
      switch (payload.event) {
        case 'configured':
        case 'signIn':
        case 'signOut':
          if (isMounted) {
            refreshState()
          }
          break
        case 'signIn_failure':
          setLoading(false)
          setError(payload.data)
          break
        default:
          break
      }
    }

    Hub.listen('auth', handler)

    return () => {
      Hub.remove('auth', handler)
      isMounted = false
    }
  }, [refreshState])

  const signOut = useCallback(() => {
    Auth.signOut()
      .then((_) => refreshState())
      .catch((err) => {
        setError(err)
      })
  }, [refreshState])

  const getAuthToken = useCallback(() => {
    if (!user || !user.signInUserSession) {
      return
    }
    const session = user.signInUserSession
    const isValid = session.isValid() || false

    const sessionExpiry = new Date(session.accessToken.getExpiration() * 1000)
    const isExpired = new Date() > sessionExpiry
    if (isValid && !isExpired) {
      return session.getIdToken().getJwtToken()
    }
    return
  }, [user])

  const signInWithRedirect = useCallback(() => {
    Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Cognito,
    }).catch((err) => {
      setError(err)
    })
  }, [])

  const clearAuthError = useCallback(() => {
    setError(null)
  }, [])

  const CognitoSignInButton = useCallback(
    ({ label = 'Sign In' }) => (
      <button className={signInButton} onClick={signInWithRedirect}>
        <span className={signInButtonContent}>{label}</span>
      </button>
    ),
    [signInWithRedirect]
  )
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loading,
        user,
        error,
        signOut,
        getAuthToken,
        SignInButton: CognitoSignInButton,
        clearAuthError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const _isAuthenticated = (user: any) => {
  if (
    !user ||
    !user.signInUserSession ||
    !user.signInUserSession.isValid ||
    !user.signInUserSession.accessToken ||
    !user.signInUserSession.accessToken.getExpiration
  ) {
    return false
  }

  const session = user.signInUserSession
  const isValid = session.isValid() || false

  const sessionExpiry = new Date(session.accessToken.getExpiration() * 1000)
  const isExpired = new Date() > sessionExpiry
  return isValid && !isExpired
}
