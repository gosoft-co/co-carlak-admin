import React from 'react'
import 'antd/dist/antd.css'
import './assets/css/app.scss'
import { Switch, Route, withRouter } from 'react-router-dom'
import SecuredRoute from './components/SecuredRoute'
import Authenticate from './pages/auth/Authenticate'
import Home from './pages/Home'
import UsersPage from './pages/Users'
import RoutesPage from './pages/Routes'
import DeliveryPage from './pages/routes/Delivery'
import { useAuth } from './auth/AuthContext'

function App() {
  const { loading } = useAuth()

  if (loading) {
    return 'Authenticating...'
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/confirm" component={Authenticate} />
        <Route exact path="/reset" component={Authenticate} />
        <Route exact path="/register" component={Authenticate} />
        <SecuredRoute exact path={'/users'} component={UsersPage} />
        <SecuredRoute exact path={'/routes'} component={RoutesPage} />
        <SecuredRoute
          exact
          path={'/routes/deliveries/:routeId'}
          component={DeliveryPage}
        />
        <SecuredRoute exact path={'/routes/new'} component={RoutesPage} />
        <SecuredRoute path={'/'} component={Home} />
      </Switch>
    </div>
  )
}

export default withRouter<any, any>(App)
