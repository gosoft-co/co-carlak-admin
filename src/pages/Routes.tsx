import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'

import {
  CreateRouteInput,
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
  BarcodeOutlined,
} from '@ant-design/icons'
import RouteForm from './routes/RouteForm'
import { createRoute, updateRoute, deleteRoute } from '../graphql/mutations'
import Route from '../models/route'
import callGraphQL from '../models/graphql-api'
import { onCreateRoute, onUpdateRoute } from '../graphql/subscriptions'
import { Link } from 'react-router-dom'
import { useAppStateContext, SubscriptionEvent } from '../context/AppState'

const { Column } = Table

const initialState = {
  name: '',
  status: '1',
}

const RoutesPage = () => {
  const { routes, getRouteList, dispatch, stateLoading } = useAppStateContext()
  const [drawerVisibility, setDrawerVisibility] = useState<boolean>(false)
  const [formState, setFormState] = useState<
    CreateRouteInput | UpdateRouteInput
  >(initialState)
  const [loading, setLoading] = useState<boolean>(false)
  const [localError, setLocalError] = useState<any>()

  useEffect(() => {
    if (!routes.length) getRouteList()

    const subscription = (API.graphql(
      graphqlOperation(onCreateRoute)
    ) as any).subscribe({
      next: (eventData: SubscriptionEvent<{ onCreateRoute: Route }>) => {
        const payload = eventData.value.data.onCreateRoute
        dispatch({ type: 'SUBSCRIPTION_ROUTE', payload })
      },
    })

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    const onUpdateSubscription = (API.graphql(
      graphqlOperation(onUpdateRoute)
    ) as any).subscribe({
      next: (eventData: SubscriptionEvent<{ onUpdateRoute: Route }>) => {
        const payload = eventData.value.data.onUpdateRoute
        dispatch({ type: 'UPDATE_ROUTE_ITEM', payload })
      },
    })

    return () => onUpdateSubscription.unsubscribe()
  }, [])

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
      await API.graphql(
        graphqlOperation(createRoute, {
          input: omit(['_version'], {
            ...formState,
          }),
        })
      )
      setFormState(initialState)
      setDrawerVisibility(false)
      setLoading(false)
    } catch (err) {
      setLocalError(err)
      setLoading(false)
      console.log(err)
    }
  }

  const handleEditRoute = (route: UpdateRouteInput) => {
    setFormState(route)
    setDrawerVisibility(true)
  }

  const handleUpdateRoute = async (route: UpdateRouteInput) => {
    setLoading(true)
    const { id, name, _version } = formState

    const currentRoute = {
      id,
      name,
      _version,
    }

    try {
      await API.graphql(graphqlOperation(updateRoute, { input: currentRoute }))
      setFormState(initialState)
      setLoading(false)
      setDrawerVisibility(false)
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
      setDrawerVisibility(false)
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
    setDrawerVisibility(open)
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

      <Table dataSource={routes} rowKey="id" loading={stateLoading || loading}>
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
          title="Stock"
          key=""
          render={(record) => (
            <Space size="middle">
              <Tooltip title="">
                <Link to={'routes/stocks'}>
                  <Button
                    shape="circle"
                    icon={<BarcodeOutlined />}
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
        visible={drawerVisibility}
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
