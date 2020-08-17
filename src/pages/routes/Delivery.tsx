import React, { useState, useEffect } from 'react'
import { Moment } from 'moment'
import Calendar from './../../components/Calendar'
import {
  CreateDeliveryInput,
  CreateDeliveryMutation,
  CreateDeliveryMutationVariables,
  GetRouteQuery,
} from '../../API'
import callGraphQL from '../../models/graphql-api'
import { createDelivery } from '../../graphql/mutations'
import { RouteComponentProps } from 'react-router-dom'
import Delivery from '../../models/delivery'
import { Row, Col, Statistic, Card, List, Avatar } from 'antd'
import { getRoute } from '../../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'

type TParams = { routeId: string }

const DeliveryPage = ({ match }: RouteComponentProps<TParams>) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [localError, setLocalError] = useState<any>()
  const [formState, setFormState] = useState<CreateDeliveryInput>({
    deliveryRouteId: match.params.routeId,
    date: '',
  })

  const [route, setRoute] = useState<GetRouteQuery>()
  const [deliveries, setDeliveries] = useState<Delivery[]>()

  useEffect(() => {
    const fetchDelivery = async () => {
      try {
        const response = (await API.graphql(
          graphqlOperation(getRoute, { id: match.params.routeId })
        )) as { data: GetRouteQuery }
        setRoute(response.data)
      } catch (error) {
        console.error('Error fetching routes', error)
      }
    }
    fetchDelivery()
  }, [])

  const pickDay = (day: Moment) => {
    setFormState({ ...formState, ['date']: day.format('YYYY-MM-DD') })
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

  return (
    <>
      <Calendar
        handlerPickDay={pickDay}
        shedules={route?.getRoute?.deliveries?.items}
      />
      {route?.getRoute?.deliveries &&
        route?.getRoute?.deliveries.items &&
        route.getRoute.deliveries.items?.length > 0 &&
        route.getRoute.deliveries.items.map((delivery, i) => (
          <Card
            title={delivery && delivery.date}
            style={{ maxWidth: 1000, margin: '0 auto' }}
            key={i}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Statistic
                  title="Clientes"
                  value={route?.getRoute?.accounts?.items?.length}
                />
              </Col>
              <Col span={12}>
                <Statistic title="Ventas" value={0} precision={2} />
              </Col>
            </Row>

            <List
              itemLayout="horizontal"
              dataSource={[]}
              /* renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )} */
            />
          </Card>
        ))}
    </>
  )
}

export default DeliveryPage

/* query GetRoute {
  getRoute(id: "94992003-1405-496b-bdac-f692e7b07d42") {
    name
    accounts {
      items{
        account {
          name
          lastName
        }
      }
    }
  }
}

mutation CreateDelivery {
  createDelivery(input: {date: "2020-08-17", deliveryRouteId: "94992003-1405-496b-bdac-f692e7b07d42"}) {
    date
  }
}

mutation CreateAccount{
  createAccount(input: {name: "Brian", lastName: "Vanegas"}) {
    id
    name
    lastName
  }
}

mutation AddAccountToRoute {
  createRouteAccounts(input: {routeAccountsRouteId:"94992003-1405-496b-bdac-f692e7b07d42", routeAccountsAccountId: "5d6662c1-2641-4622-a05a-1deb24e0cdd2"}) {
    id
  }
} */
