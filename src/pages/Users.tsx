import React, { useEffect, useState } from 'react'
import { useUserContext } from './../context/UserContext'
import { Table, Tooltip, Button, Form, Input, Select, Drawer } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Auth } from 'aws-amplify'
import UserForm, { User } from './user/UserForm'

const { Column } = Table
const { Option } = Select

const UsersPage = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [localError, setLocalError] = useState<any>()

  const [drawerVisible, setDrawerVisible] = useState<boolean>(false)
  const { employees, loadUsers, resetUsersList, resetMethod } = useUserContext()

  useEffect(() => {
    const getUsersData = async () => {
      try {
        loadUsers(10, 'Employees')
      } catch (e) {
        console.log(e)
      }
    }
    if (!employees) {
      getUsersData() // only run when we have an Auth Token
    }
  }, [employees, loadUsers])

  useEffect(() => {
    return () => {
      resetUsersList()
      resetMethod('loadUsers')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRegister = async (user: User) => {
    setLoading(true)
    try {
      const {
        username,
        password,
        email,
        name,
        family_name,
        gender,
        birthdate,
        address,
        phone_number,
      } = user
      const response = await Auth.signUp({
        username: username,
        password,
        attributes: {
          email,
          name,
          family_name,
          gender,
          birthdate,
          address,
          phone_number,
        },
      })

      if (response && !response.userConfirmed) {
        await resetUsersList()
        setDrawerVisible(false)
        setLoading(false)
      }
      // AuthContext should handle the rest if successfull
    } catch (err) {
      setLoading(false)
      setLocalError(err)
      console.log(err)
    }
  }

  return (
    <>
      <Tooltip title="Agregar nuevo">
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          style={{ marginBottom: 10 }}
          onClick={() => setDrawerVisible(true)}
        />
      </Tooltip>
      <Table dataSource={employees} rowKey="Username">
        <Column title="Usuario" dataIndex="Username" key="Username" />
        <Column
          title="Creación"
          dataIndex="UserCreateDate"
          key="UserCreateDate"
        />
        <Column
          title="Última modificación"
          dataIndex="UserLastModifiedDate"
          key="UserLastModifiedDate"
        />
        <Column title="Habilitado" dataIndex="Enabled" key="Enabled" />
        <Column title="Estado" dataIndex="UserStatus" key="UserStatus" />
      </Table>

      <Drawer
        title="Crear nuevo usuario"
        width={520}
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button
              onClick={() => setDrawerVisible(false)}
              style={{ marginRight: 8 }}
            >
              Cancel
            </Button>
            {/* <Button onClick={handleSubmit} type="primary">
              Crear
            </Button> */}
          </div>
        }
      >
        <UserForm
          completeHandler={handleRegister}
          loading={loading}
          error={localError}
        />
      </Drawer>
    </>
  )
}

export default UsersPage
