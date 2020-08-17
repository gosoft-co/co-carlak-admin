import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listRoutes } from './../graphql/queries'
import {
  ListRoutesQuery,
  CreateRouteMutation,
  CreateRouteInput,
  CreateRouteMutationVariables,
  OnCreateRouteSubscription,
  UpdateRouteMutation,
  UpdateRouteMutationVariables,
  UpdateRouteInput,
  DeleteRouteMutation,
  DeleteRouteMutationVariables,
} from '../API'
import { Table, Button, Tooltip, Drawer, Space } from 'antd'
import {
  PlusOutlined,
  CheckOutlined,
  CloseOutlined,
  FormOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from '@ant-design/icons'
import RouteForm from './routes/RouteForm'
import { createRoute, updateRoute, deleteRoute } from '../graphql/mutations'
import Route, { mapListRoutes } from '../models/route'
import callGraphQL, { SubscriptionValue } from '../models/graphql-api'
import { onCreateRoute } from '../graphql/subscriptions'
import { Link } from 'react-router-dom'

const { Column } = Table

function mapOnCreateRouteSubscription(
  createRouteSubscription: OnCreateRouteSubscription
): Route {
  const { id, name, status } = createRouteSubscription.onCreateRoute || {}
  return {
    id,
    name,
    status,
  } as Route
}

const initialState = {
  name: '',
  status: '1',
}

const RoutesPage = () => {
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false)
  const [formState, setFormState] = useState<
    CreateRouteInput | UpdateRouteInput
  >(initialState)
  const [loading, setLoading] = useState<boolean>(false)
  const [localError, setLocalError] = useState<any>()
  const [routes, setRoutes] = useState<Route[]>()

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await callGraphQL<ListRoutesQuery>(listRoutes, {
          variables: { filter: { _deleted: false } },
        })
        console.log(response)
        const routes = mapListRoutes(response)
        setRoutes(routes)
      } catch (error) {
        console.error('Error fetching routes', error)
      }
    }
    fetchRoutes()
  }, [])

  useEffect(() => {
    // @ts-ignore
    const subscription = API.graphql(graphqlOperation(onCreateRoute)).subscribe(
      {
        next: (response: SubscriptionValue<OnCreateRouteSubscription>) => {
          const route = mapOnCreateRouteSubscription(response.value.data)
          console.log(route)
          let aroute = routes
          aroute?.push(route)
          setRoutes(aroute)
        },
      }
    )

    return () => subscription.unsubscribe()
  })

  const handleForm = () => {
    if (formState.id) {
      handleUpdateRoute(formState as UpdateRouteInput)
    } else {
      handleCreateRoute(formState as CreateRouteInput)
    }
  }

  const omit = (keys: string[], obj: any) =>
    Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)))

  const handleCreateRoute = async (formState: CreateRouteInput) => {
    setLoading(true)
    try {
      const response = await callGraphQL<CreateRouteMutation>(createRoute, {
        input: omit(['_version'], {
          ...formState,
        }),
      } as CreateRouteMutationVariables)
      setFormState(initialState)
      setLoading(false)
      setDrawerVisible(false)
    } catch (err) {
      setLocalError(err)
      setLoading(false)
      console.log(err)
    }
  }

  const handleEditRoute = (route: UpdateRouteInput) => {
    setFormState(route)
    setDrawerVisible(true)
  }

  const handleUpdateRoute = async (route: UpdateRouteInput) => {
    setLoading(true)
    try {
      await callGraphQL<UpdateRouteMutation>(updateRoute, {
        input: route,
      } as UpdateRouteMutationVariables)
      setFormState(initialState)
      setLoading(false)
      setDrawerVisible(false)
    } catch (err) {
      setLocalError(err)
      setLoading(false)
      console.log(err)
    }
  }

  const handleDeleteRoute = async (id: string, _version: number) => {
    setLoading(true)
    try {
      await callGraphQL<DeleteRouteMutation>(deleteRoute, {
        input: { id: id, _version: _version },
      } as DeleteRouteMutationVariables)
      setFormState(initialState)
      setLoading(false)
      setDrawerVisible(false)
    } catch (err) {
      setLocalError(err)
      setLoading(false)
      console.log(err)
    }
  }

  const toggleEnable = (route: UpdateRouteInput) => {
    handleUpdateRoute({
      ...route,
      ['status']: route.status === '1' ? '0' : '1',
    })
  }

  const toggleDrawer = (open: boolean) => {
    setFormState(initialState)
    setDrawerVisible(open)
  }

  return (
    <div>
      <Tooltip title="Nueva Ruta">
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          style={{ marginBottom: 10 }}
          onClick={() => toggleDrawer(true)}
        />
      </Tooltip>

      <Table dataSource={routes} rowKey="id">
        <Column title="Name" dataIndex="name" key="name" />
        <Column
          title="Estado"
          key="status"
          render={(text, record: Route) => (
            <Space size="middle">
              {record.status === '1' ? 'Activo' : 'Inactivo'}
            </Space>
          )}
        />
        <Column
          title="Repartos"
          key="deliveries"
          render={(text, record: Route) => (
            <Space size="middle">
              <Tooltip title="Repartos">
                <Link to={'/routes/deliveries/' + record.id}>
                  <Button
                    shape="circle"
                    icon={<CalendarOutlined />}
                    size="small"
                  />
                </Link>
              </Tooltip>
            </Space>
          )}
        />
        <Column
          title="Acciones"
          key="action"
          render={(text, record: Route) => (
            <Space size="middle">
              {record.status === '1' ? (
                <Tooltip title="Desactivar">
                  <Button
                    shape="circle"
                    icon={<CloseOutlined />}
                    size="small"
                    onClick={() => toggleEnable(record as UpdateRouteInput)}
                  />
                </Tooltip>
              ) : (
                <Tooltip title="Activar">
                  <Button
                    shape="circle"
                    icon={<CheckOutlined />}
                    size="small"
                    onClick={() => toggleEnable(record as UpdateRouteInput)}
                  />
                </Tooltip>
              )}
              <Tooltip title="Editar">
                <Button
                  shape="circle"
                  icon={<FormOutlined />}
                  size="small"
                  onClick={() => handleEditRoute(record as UpdateRouteInput)}
                />
              </Tooltip>
              <Tooltip title="Eliminar">
                <Button
                  shape="circle"
                  icon={<DeleteOutlined />}
                  size="small"
                  onClick={() =>
                    handleDeleteRoute(record.id || '', record._version || 1)
                  }
                />
              </Tooltip>
            </Space>
          )}
        />
      </Table>

      <Drawer
        title="Crear nueva ruta"
        width={520}
        onClose={() => toggleDrawer(false)}
        visible={drawerVisible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button
              onClick={() => toggleDrawer(false)}
              style={{ marginRight: 8 }}
            >
              Cancel
            </Button>
          </div>
        }
      >
        <RouteForm
          handleFormRoute={handleForm}
          loading={loading}
          error={localError}
          formState={formState as any}
          setFormState={setFormState}
        />
      </Drawer>
    </div>
  )
}

export default RoutesPage
