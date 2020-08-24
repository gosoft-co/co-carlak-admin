import React, { useState, useEffect } from 'react'
import moment, { Moment } from 'moment'
import Calendar from './../../components/Calendar'
import {
  CreateDeliveryInput,
  CreateDeliveryMutation,
  CreateDeliveryMutationVariables,
  GetRouteQuery,
  GetDeliveryQuery,
  CreateDeliveryUsersMutation,
} from '../../API'
import callGraphQL from '../../models/graphql-api'
import {
  createDelivery,
  createDeliveryUsers,
  deleteDeliveryUsers,
} from '../../graphql/mutations'
import { RouteComponentProps } from 'react-router-dom'
import Delivery from '../../models/delivery'
import { CloseOutlined } from '@ant-design/icons'
import {
  Row,
  Col,
  Statistic,
  Card,
  List,
  Avatar,
  AutoComplete,
  Divider,
  Tooltip,
  Button,
  Spin,
  Skeleton,
  Drawer,
  PageHeader,
  Tabs,
  Badge,
} from 'antd'
import { getRoute, getDelivery } from '../../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { useUserContext } from '../../context/UserContext'
import { onCreateDeliveryUsers } from '../../graphql/subscriptions'
import DeliveryForm from './DeliveryForm'
import { useAppStateContext } from '../../context/AppState'

const { TabPane } = Tabs

type DeliveryUser = {
  deliveryUsersDeliveryId: string
  user: string
}

type SubscriptionEvent<D> = {
  value: {
    data: D
  }
}

type TParams = { routeId: string }

const DeliveryPage = ({ match }: RouteComponentProps<TParams>) => {
  const {
    dispatch,
    nextDelivery,
    currentDelivery,
    deliveryUsers,
    deliveryProducts,
  } = useAppStateContext()
  const { loadUsers, employees } = useUserContext()
  const [loading, setLoading] = useState<boolean>(false)
  const [localError, setLocalError] = useState<any>()
  const [drawerVisibility, setDrawerVisibility] = useState<boolean>(false)

  const [formState, setFormState] = useState<CreateDeliveryInput>({
    deliveryRouteId: match.params.routeId,
    date: '',
  })

  const [route, setRoute] = useState<GetRouteQuery>()

  useEffect(() => {
    const fetchDelivery = async () => {
      setLoading(true)
      try {
        const response = (await API.graphql(
          graphqlOperation(getRoute, { id: match.params.routeId })
        )) as { data: GetRouteQuery }

        const deliveries = response.data.getRoute?.deliveries
          ?.items as Delivery[]
        const sortDeliveries = deliveries.sort((a, b) =>
          moment.utc(a.date).diff(moment.utc(b.date))
        )

        const cDelivery = sortDeliveries.reduce((nd: Delivery[], d) => {
          if (moment().diff(d.date) < 0) {
            nd.push(d)
          }
          return nd
        }, [])

        dispatch({
          type: 'SET_NEXT_DELIVERY',
          payload: cDelivery[0],
        })

        dispatch({
          type: 'SET_DELIVERIES',
          payload: cDelivery,
        })

        setRoute(response.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error('Error fetching routes', error)
      }
    }
    fetchDelivery()
    loadUsers(50, 'Employees')
    dispatch({
      type: 'SET_DELIVERY_FORM_DATA',
      payload: { ['deliveryRouteId']: match.params.routeId },
    })
  }, [])

  useEffect(() => {
    const fetchCurrentDelivery = async () => {
      setLoading(true)
      if (nextDelivery && nextDelivery.id) {
        const delivery = (await API.graphql(
          graphqlOperation(getDelivery, { id: nextDelivery.id })
        )) as {
          data: GetDeliveryQuery
        }

        console.log(delivery)

        dispatch({
          type: 'SET_DELIVERY_PRODUCTS',
          payload: delivery.data.getDelivery?.products?.items as any[],
        })

        dispatch({
          type: 'SET_DELIVERY_USERS',
          payload:
            delivery.data.getDelivery?.users?.items?.filter(
              (d) => d && !d._deleted
            ) || [],
        })

        dispatch({
          type: 'CURRENT_DELIVERY',
          payload: delivery.data.getDelivery as Delivery,
        })
      }
      setLoading(false)
    }
    fetchCurrentDelivery()
  }, [nextDelivery])

  useEffect(() => {
    const subscription = (API.graphql(
      graphqlOperation(onCreateDeliveryUsers)
    ) as any).subscribe({
      next: (
        eventData: SubscriptionEvent<{ onCreateDeliveryUsers: DeliveryUser }>
      ) => {
        const payload = eventData.value.data.onCreateDeliveryUsers
        console.log(payload)
        //dispatch({ type: 'UPDATE_PRODUCT_ITEM', payload })
      },
    })

    return () => subscription.unsubscribe()
  })

  const pickDay = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    day: Moment
  ) => {
    setFormState({ ...formState, ['date']: day.format('YYYY-MM-DD') })
    dispatch({
      type: 'SET_DELIVERY_FORM_DATA',
      payload: { ['date']: day.format('YYYY-MM-DD') },
    })
    switch (e.currentTarget.className) {
      case 'overdue':
        //
        break
      default:
        if (
          day.diff(moment()) > 0 ||
          moment().format('YYYY-MM-DD') === day.format('YYYY-MM-DD')
        )
          setDrawerVisibility(true)
    }
  }

  const handleCreateDelivery = async (formState: CreateDeliveryInput) => {
    setLoading(true)
    try {
      const response = await callGraphQL<CreateDeliveryMutation>(
        createDelivery,
        {
          input: formState,
        } as CreateDeliveryMutationVariables
      )
      setLoading(false)
    } catch (err) {
      setLocalError(err)
      setLoading(false)
      console.log(err)
    }
  }

  const addUserToDelivery = async (user: any) => {
    setLoading(true)
    const { id } = currentDelivery

    try {
      const response = (await API.graphql(
        graphqlOperation(createDeliveryUsers, {
          input: { deliveryUsersDeliveryId: id, user },
        })
      )) as { data: CreateDeliveryUsersMutation }
      let narray = deliveryUsers
      narray.push(response.data.createDeliveryUsers)

      dispatch({
        type: 'SET_DELIVERY_USERS',
        payload: narray,
      })

      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  const handleRemoveUser = async (user: any) => {
    setLoading(true)

    const { id, _version } = user

    try {
      await API.graphql(
        graphqlOperation(deleteDeliveryUsers, { input: { id, _version } })
      )
      let narray = deliveryUsers
      narray.splice(
        narray.findIndex((u) => u.id === user.id),
        1
      )
      dispatch({
        type: 'SET_DELIVERY_USERS',
        payload: narray,
      })
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  /* const addDelivery = async () => {
    setLoading(true)

    try {
      await API.graphql(
        graphqlOperation(createDelivery, { input: { ...deliveryFormData } })
      )

      setDrawerVisibility(false)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  } */

  if (loading) {
    return <Skeleton active />
  }

  const Content = ({ children, extra }: any) => {
    return (
      <div className="content">
        <div className="main">{children}</div>
        <div className="extra">{extra}</div>
      </div>
    )
  }

  const extraContent = (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Statistic
            title="Clientes"
            value={route?.getRoute?.accounts?.items?.length}
          />
        </Col>
        <Col span={8}>
          <Statistic title="Ventas" value={0} precision={2} />
        </Col>
        <Col span={8}>
          <Statistic title="Recuperaciones" value={0} precision={2} />
        </Col>
      </Row>

      <Divider />
    </div>
  )

  return (
    <>
      <Card style={{ maxWidth: 1000 }}>
        <Calendar
          handlerPickDay={pickDay}
          shedules={route?.getRoute?.deliveries?.items}
        />
      </Card>

      {nextDelivery && (
        <Card style={{ maxWidth: 1000, margin: '0 auto' }}>
          <PageHeader
            className="site-page-header-responsive"
            onBack={() => window.history.back()}
            title={currentDelivery && currentDelivery.date}
            subTitle="Reparto"
            extra={[]}
            footer={
              <Tabs defaultActiveKey="1">
                <TabPane tab="Usuarios" key="1">
                  <AutoComplete
                    style={{ width: '100%', marginTop: 10 }}
                    options={employees
                      .map((u) => ({ value: u.Username }))
                      .filter(
                        (u) => !deliveryUsers.find((x) => u.value === x.user)
                      )}
                    placeholder="Buscar usuario"
                    filterOption={(inputValue, option) =>
                      option?.value
                        .toUpperCase()
                        .indexOf(inputValue.toUpperCase()) !== -1
                    }
                    onSelect={addUserToDelivery}
                  />

                  {loading && <Spin tip="Loading..."></Spin>}
                  {!loading && (
                    <List
                      itemLayout="horizontal"
                      dataSource={deliveryUsers}
                      renderItem={(item) =>
                        !item._deleted && (
                          <List.Item
                            actions={[
                              <Tooltip title="Eliminar">
                                <Button
                                  shape="circle"
                                  icon={<CloseOutlined />}
                                  size="small"
                                  onClick={() => handleRemoveUser(item)}
                                />
                              </Tooltip>,
                            ]}
                          >
                            <List.Item.Meta
                              avatar={
                                <Avatar
                                  style={{
                                    color: '#f56a00',
                                    backgroundColor: '#fde3cf',
                                  }}
                                >
                                  {item.user.slice(0, 1)}
                                </Avatar>
                              }
                              title={item.user}
                              description={item.user}
                            />
                          </List.Item>
                        )
                      }
                    />
                  )}
                </TabPane>
                <TabPane tab="Productos" key="2">
                  <List
                    itemLayout="horizontal"
                    dataSource={deliveryProducts}
                    renderItem={(item) => (
                      <List.Item actions={[item.price, item.quantity]}>
                        <List.Item.Meta
                          title={item.product.name}
                          /* description={item.product.description || ''} */
                        />
                      </List.Item>
                    )}
                  />
                </TabPane>
              </Tabs>
            }
          >
            <Content extra={extraContent}></Content>
          </PageHeader>
        </Card>
      )}

      <Drawer
        title="Configurar nueva salida de distribución"
        width={520}
        onClose={() => setDrawerVisibility(false)}
        visible={drawerVisibility}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button
              onClick={() => setDrawerVisibility(false)}
              style={{ marginRight: 8 }}
            >
              Cancel
            </Button>
          </div>
        }
      >
        <DeliveryForm
          setLoading={setLoading}
          setDrawerVisibility={setDrawerVisibility}
          loading={loading}
        />
      </Drawer>
    </>
  )
}

export default DeliveryPage
