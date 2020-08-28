import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Amplify from 'aws-amplify'
import { AuthProvider } from './auth/AuthContext'
import awsconfig from './aws-exports'
import { UserProvider } from './context/UserContext'
import { AppStateProvider } from './context/AppState'

Amplify.configure({
  ...awsconfig,
  Auth: {
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'us-east-1:cf04aca4-9297-43bc-9eef-dc32dabdb9fb',
    // REQUIRED - Amazon Cognito Region
    region: 'us-east-1',
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-1_Kx4z5IzgN',
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '5rb14d3f0p7n91010hr5fvuuqh',
  },
})

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <AppStateProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AppStateProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
