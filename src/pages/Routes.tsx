import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { API, graphqlOperation } from 'aws-amplify'
import { listRoutes } from './../graphql/queries'
import { ListRoutesQuery, CreateRouteInput, CreateRouteMutation } from '../API'
import { Table, Button, Form, Input } from 'antd'
import { createRoute } from '../graphql/mutations'

const { Column } = Table

const RoutesPage = () => {
  const location = useLocation()
  const history = useHistory()

  const [formState, setFormState] = useState<CreateRouteInput>({
    name: '',
    status: '1',
  })
  const [routes, updateRoutes] = useState<ListRoutesQuery | undefined>()

  useEffect(() => {
    const fetchRoutes = async () => {
      const response: { data: ListRoutesQuery } = (await API.graphql(
        graphqlOperation(listRoutes)
      )) as {
        data: ListRoutesQuery
      }
      updateRoutes(response.data)
    }

    fetchRoutes()
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleCreateRoute = async () => {
    try {
      const response = (await API.graphql(
        graphqlOperation(createRoute, { input: formState })
      )) as { data: CreateRouteMutation }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      {location.pathname === '/routes' && (
        <>
          <Button
            onClick={() => history.push('routes/new')}
            type="primary"
            style={{ marginBottom: 16 }}
          >
            Add
          </Button>
          <Table dataSource={routes?.listRoutes?.items as any} rowKey="id">
            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Status" dataIndex="status" key="status" />
          </Table>
        </>
      )}

      {location.pathname === '/routes/new' && (
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={handleCreateRoute}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Por favor digite el nombre de la ruta!',
              },
            ]}
          >
            <Input name="name" onChange={handleChange} placeholder="name" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Crear
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  )
}

export default RoutesPage
