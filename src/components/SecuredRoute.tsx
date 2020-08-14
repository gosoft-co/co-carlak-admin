import React from 'react'
import PropTypes from 'prop-types'
import { Route, RouteProps } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import Authenticate from '../pages/auth/Authenticate'
import { Layout } from 'antd'

import HeaderLayout from './layout/HeaderLayuout'
import Sidebar from './layout/Sidebar'

const { Content } = Layout

const SecuredRoute = (routeProps: RouteProps) => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Authenticate />
  }
  return (
    <>
      <Layout>
        <HeaderLayout />
        <Layout>
          <Sidebar />
          <Layout style={{ padding: '0 24px 24px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Route {...routeProps} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}

SecuredRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  path: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  styles: PropTypes.any,
}

export default SecuredRoute
