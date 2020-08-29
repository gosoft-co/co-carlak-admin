import React, { useState, useEffect } from 'react'
import moment, { Moment } from 'moment'
import Calendar from './../../components/Calendar'
import {
  CreateDeliveryInput,
  CreateDeliveryMutation,
  CreateDeliveryMutationVariables,
  GetRouteQuery,
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
import {
  CloseOutlined,
  CaretRightOutlined,
  CaretLeftOutlined,
} from '@ant-design/icons'
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
} from 'antd'
import { getRoute } from '../../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { useUserContext } from '../../context/UserContext'
import DeliveryForm from './DeliveryForm'
import { useAppStateContext } from '../../context/AppState'

const { TabPane } = Tabs

type TParams = { routeId: string }

const DeliveryPage = ({ match }: RouteComponentProps<TParams>) => {
  const { dispatch, deliveryUsers, deliveryProducts } = useAppStateContext()

  const { loadUsers, employees } = useUserContext()
  const [loading, setLoading] = useState<boolean>(false)
  const [localError, setLocalError] = useState<any>()
  const [drawerVisibility, setDrawerVisibility] = useState<boolean>(false)

  const [formState, setFormState] = useState<CreateDeliveryInput>({
    deliveryRouteId: match.params.routeId,
    date: '',
  })

  const [route, setRoute] = useState<GetRouteQuery>()
  const [deliveries, setDeliveries] = useState<Delivery[]>([])
  const [deliveryCurrentIndex, setDeliveryCurrentIndex] = useState<number>()
  const [toggleClass, setToggleClass] = useState<string | null>(null)

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

        setDeliveries(sortDeliveries)
        setDeliveryCurrentIndex(
          sortDeliveries.findIndex(
            (d) =>
              moment(d.date).format('YYYY-MM-DD') ===
                moment().format('YYYY-MM-DD') ||
              moment(d.date).diff(moment()) > 0
          )
        )

        dispatch({
          type: 'SET_DELIVERIES',
          payload: sortDeliveries,
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
    if (deliveryCurrentIndex === undefined || deliveryCurrentIndex === -1)
      return
    dispatch({
      type: 'SET_DELIVERY_PRODUCTS',
      payload: deliveries[deliveryCurrentIndex].products?.items || [],
    })

    dispatch({
      type: 'SET_DELIVERY_USERS',
      payload:
        deliveries[deliveryCurrentIndex].users?.items.filter(
          (d) => d && !d._deleted
        ) || [],
    })
  }, [deliveryCurrentIndex])

  const findNextDelivery = () => {
    if (deliveryCurrentIndex === undefined || deliveryCurrentIndex === -1)
      return
    setDeliveryCurrentIndex(
      deliveries.findIndex(
        (d) =>
          d.id === deliveries[(deliveryCurrentIndex + 1) % deliveries.length].id
      )
    )
    setToggleClass('animate__fadeIn')
    setTimeout(() => {
      setToggleClass(null)
    }, 500)
  }

  const findPreviousDelivery = () => {
    if (deliveryCurrentIndex === undefined || deliveryCurrentIndex === -1)
      return
    setDeliveryCurrentIndex(
      deliveries.findIndex(
        (d) =>
          d.id ===
          deliveries[
            (deliveryCurrentIndex + deliveries.length - 1) % deliveries.length
          ].id
      )
    )
    setToggleClass('animate__fadeIn')
    setTimeout(() => {
      setToggleClass(null)
    }, 500)
  }

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
    if (deliveryCurrentIndex === undefined) return
    const { id } = deliveries[deliveryCurrentIndex]

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
      <Card style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Calendar
          handlerPickDay={pickDay}
          shedules={route?.getRoute?.deliveries?.items}
        />
      </Card>

      {deliveries.length && (
        <Card style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Row>
            <Col flex="50px" className="deliveryButtonPrevious">
              <Tooltip title="Entrega anterior">
                <Button
                  type="primary"
                  shape="circle"
                  onClick={findPreviousDelivery}
                  icon={<CaretLeftOutlined />}
                />
              </Tooltip>
            </Col>
            <Col
              flex="auto"
              className={toggleClass ? 'animate__animated ' + toggleClass : ''}
            >
              <PageHeader
                className="site-page-header-responsive"
                onBack={() => window.history.back()}
                title={
                  deliveryCurrentIndex !== undefined
                    ? deliveries[deliveryCurrentIndex].date
                    : ''
                }
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
                            (u) =>
                              !deliveryUsers.find((x) => u.value === x.user)
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
            </Col>
            <Col flex="50px" className="deliveryButtonNext">
              <Tooltip title="Entrega siguiente">
                <Button
                  type="primary"
                  shape="circle"
                  onClick={findNextDelivery}
                  icon={<CaretRightOutlined />}
                />
              </Tooltip>
            </Col>
          </Row>
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
