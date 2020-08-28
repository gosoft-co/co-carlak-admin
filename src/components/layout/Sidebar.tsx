import React from 'react'
import { Menu, Layout } from 'antd'
import {
  UserOutlined,
  HomeOutlined,
  AppstoreOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

//const { SubMenu } = Menu
const { Sider } = Layout

const Sidebar = () => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to={'/'}>Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<EnvironmentOutlined />}>
          <Link to={'/routes'}>Rutas</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <Link to={'/users'}>Usuarios</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<AppstoreOutlined />}>
          <Link to={'/products'}>Productos</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar
