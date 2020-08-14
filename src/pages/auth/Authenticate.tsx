import React, { useState } from 'react'
import { withRouter, RouteComponentProps, useHistory } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import { useAuth } from '../../auth/AuthContext'
import SigninForm from './SigninForm'

const Authenticate = ({ match, location }: RouteComponentProps) => {
  const isRegister = match.path === '/register'
  const isConfirm = match.path === '/confirm'
  const isReset = match.path === '/reset'

  const { error, isAuthenticated, clearAuthError } = useAuth()
  const [authLoading, setAuthLoading] = useState(false)
  const [challenge, setChallenge] = useState<any>()
  const [localError, setLocalError] = useState<any>()
  const [register, setRegister] = useState<boolean>(isRegister)
  const [confirm, setConfirm] = useState<boolean>(isConfirm)
  const [reset, setReset] = useState<boolean>(isReset)
  const [email, setEmail] = useState<string | undefined>()
  const [codeSent, setCodeSent] = useState<boolean | undefined>(false)

  const history = useHistory()
  const authRoutes = ['/register', '/confirm', '/reset']
  if (isAuthenticated) {
    // redirect to the location in the url unless it is one of the Auth routes
    if (authRoutes.includes(match.path)) {
      history.push('/')
    } else {
      history.push(location.pathname)
    }
  }

  const toggleRegister = (register?: boolean) => {
    setRegister(!!register)
  }

  const resendCode = async (
    type: 'password' | 'authentication',
    manualEmail?: string,
    redirect?: boolean
  ) => {
    setAuthLoading(true)
    const finalEmail = email || manualEmail
    if (!finalEmail) {
      setAuthLoading(false)
      setLocalError({ message: 'No User or Email specified.' })
      return
    }
    if (type === 'authentication') {
      try {
        const response = await Auth.resendSignUp(finalEmail)
        setAuthLoading(false)
        if (!response) {
          setLocalError({
            message: 'There was an error resending the Authentication Code',
          })
        } else {
          setLocalError(undefined)
          setCodeSent(true)
        }
      } catch (err) {
        setAuthLoading(false)
        setLocalError(err)
        console.log(err)
      }
    } else if (type === 'password') {
      try {
        const response = await Auth.forgotPassword(finalEmail)
        setAuthLoading(false)
        if (!response) {
          setLocalError({
            message: 'There was an error sending the forgot password Code',
          })
        } else {
          setLocalError(undefined)
          setCodeSent(true)
          if (redirect) {
            setCodeSent(false)
            setEmail(finalEmail)
            setReset(true)
          }
        }
      } catch (error) {
        setAuthLoading(false)
        setLocalError(error)
        console.log(error)
      }
    }
  }

  const handleSignIn = async (email: string, password: string) => {
    try {
      setAuthLoading(true)
      const response = await Auth.signIn(email, password)
      if (response && response.challengeName === 'NEW_PASSWORD_REQUIRED') {
        setChallenge(response)
        setAuthLoading(false)
      }
    } catch (err) {
      setAuthLoading(false)
      if (err.code === 'PasswordResetRequiredException') {
        await Auth.forgotPassword(email)
        setLocalError(undefined)
        setReset(true)
        setEmail(email)
        clearAuthError()
      } else if (err.code === 'UserNotConfirmedException') {
        await Auth.resendSignUp(email)
        setLocalError(undefined)
        setConfirm(true)
        clearAuthError()
        setEmail(email)
      } else {
        setLocalError(err)
        console.log('error signing in', error)
      }
    }
  }
  const handleCompleteProfile = async (
    newPassword: string,
    requiredAttributes?: any
  ) => {
    setAuthLoading(true)
    try {
      const response = await Auth.completeNewPassword(
        challenge,
        newPassword,
        requiredAttributes
      )
      console.log('continue...')
      console.log(response)
      // AuthContext should handle the rest if successfull
    } catch (err) {
      setAuthLoading(false)
      setLocalError(err)
      console.log(err)
    }
  }
  const handleRegister = async (
    name: string,
    email: string,
    password: string
  ) => {
    setAuthLoading(true)
    try {
      const response = await Auth.signUp({
        username: email,
        password,
        attributes: {
          name,
        },
      })
      if (response && !response.userConfirmed) {
        setConfirm(true)
        setRegister(false)
        setEmail(email)
        setAuthLoading(false)
      }
      // AuthContext should handle the rest if successfull
    } catch (err) {
      setAuthLoading(false)
      setLocalError(err)
      console.log(err)
    }
  }
  const handleConfirm = async (code: string, manualEmail?: string) => {
    setAuthLoading(true)
    const finalEmail = email || manualEmail
    if (!code || !finalEmail) {
      setAuthLoading(false)
      setLocalError({
        message: 'Could not confirm as there was an incorrect email or code.',
      })
      return
    }
    try {
      const response = await Auth.confirmSignUp(finalEmail, code)
      if (response && response === 'SUCCESS') {
        setAuthLoading(false)
        setConfirm(false)
        setLocalError(undefined)
      } else {
        setAuthLoading(false)
        setConfirm(true)
        setLocalError({ message: response })
      }
    } catch (err) {
      setAuthLoading(false)
      setLocalError(err)
      console.log(err)
    }
  }
  const handleResetPassword = async (
    code: string,
    password: string,
    manualEmail?: string
  ) => {
    setAuthLoading(true)
    const finalEmail = email || manualEmail
    if (!code || !finalEmail || !password) {
      setAuthLoading(false)
      setLocalError({
        message:
          'Could not reset the password as there was an incorrect email or code.',
      })
      return
    }
    try {
      await Auth.forgotPasswordSubmit(finalEmail, code, password)
      setAuthLoading(false)
      setReset(false)
      setLocalError(undefined)
    } catch (err) {
      setAuthLoading(false)
      setLocalError(err)
      console.log(err)
    }
  }

  return (
    <>
      {!challenge && !register && !confirm && !reset && (
        <SigninForm
          loading={authLoading}
          error={localError || error}
          signInHandler={handleSignIn}
          toggleRegister={toggleRegister}
          resendCode={resendCode}
        />
      )}
      {/*  { !!challenge && !register && !confirm && 
                <CompleteProfileForm 
                  challenge={challenge} 
                  loading={authLoading} 
                  error={localError || error} 
                  completeHandler={handleCompleteProfile} 
                />
               } */}
      {/* { !challenge && !confirm && register && 
                <RegisterForm 
                  loading={authLoading} 
                  error={localError || error} 
                  completeHandler={handleRegister}
                  toggleRegister={toggleRegister}
                />
               } */}
      {/*  { !challenge && !register && confirm && 
                <ConfirmForm 
                  loading={authLoading} 
                  error={localError || error} 
                  email={email}
                  completeHandler={handleConfirm} 
                  resendCode={resendCode}
                  success={codeSent}
                />
               } */}
      {/*  { reset && 
                <ResetForm 
                  loading={authLoading} 
                  error={localError || error} 
                  email={email}
                  completeHandler={handleResetPassword} 
                  resendCode={resendCode}
                  success={codeSent}
                />
               } */}
    </>
  )
}

export default withRouter<any, any>(Authenticate)
