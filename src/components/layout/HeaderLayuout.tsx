import React from 'react'
import { Layout, Row, Col, Menu, Dropdown, Avatar } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Auth } from 'aws-amplify'

const { Header } = Layout

const menu = (
  <Menu>
    <Menu.Item>Mi Cuenta</Menu.Item>
    <Menu.Item>
      <Link to={'#'} onClick={() => Auth.signOut()}>
        Cerrar Sesión
      </Link>
    </Menu.Item>
  </Menu>
)

const HeaderLayout = () => {
  return (
    <Header className="header">
      <div className="logo" />
      <Row>
        <Col flex="1 1 200px">
          {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu> */}
        </Col>
        <Col
          flex="0 1 300px"
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Dropdown overlay={menu} placement="bottomCenter">
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              {/* Hover me <DownOutlined /> */}
              <Avatar size="large" icon={<UserOutlined />} />
            </a>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderLayout
