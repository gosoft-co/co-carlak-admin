import React, { useEffect, useState } from 'react'
import { Form, DatePicker, Button, List, InputNumber, Skeleton } from 'antd'
import moment, { Moment } from 'moment'
import { useAppStateContext } from '../../context/AppState'
import { CreateDeliveryProductsInput, CreateDeliveryMutation } from '../../API'
import { API, graphqlOperation } from 'aws-amplify'
import { createDelivery, createDeliveryProducts } from '../../graphql/mutations'

const defaultProductsDelivery = [
  {
    id: 'ff7a3ae4-0e1f-4fec-b7e4-62f54c38ee18',
    quantity: 10,
  },
]

interface IState {
  //handleSubmitDeliveryForm: () => void
  loading: boolean
  setLoading: (value: boolean) => void
  setDrawerVisibility: (value: boolean) => void
}

const DeliveryForm = ({ loading, setLoading, setDrawerVisibility }: IState) => {
  const [stockProducts, setStockProducts] = useState<
    CreateDeliveryProductsInput[]
  >([])
  const {
    deliveryFormData,
    products,
    getProductList,
    stateLoading,
  } = useAppStateContext()
  const [deliveryForm] = Form.useForm()

  useEffect(() => {
    deliveryForm.setFieldsValue({
      date: moment(deliveryFormData.date, 'YYYY-MM-DD'),
    })
  }, [deliveryFormData])

  useEffect(() => {
    const reloadProducts = async () => {
      if (!products.length) {
        await getProductList()
      }
    }
    reloadProducts()
  }, [])

  useEffect(() => {
    setStockProducts(
      products.map((p) => ({
        ...p,
        quantity:
          defaultProductsDelivery.find((pd) => pd.id === p.id)?.quantity || 0,
      })) as any
    )
  }, [products])

  const disabledDate = (current: Moment) => {
    return current < moment().endOf('day')
  }

  const handleChangeQuantityStock = (value: any, id: string | undefined) => {
    let stock = stockProducts
    const index = stock.findIndex((s) => s.id === id)
    stock[index] = { ...stock[index], quantity: value }
    setStockProducts(stock)
  }

  const addDelivery = async () => {
    setLoading(true)

    try {
      const response = (await API.graphql(
        graphqlOperation(createDelivery, { input: { ...deliveryFormData } })
      )) as { data: CreateDeliveryMutation }

      stockProducts.map(async (product) => {
        if (product.quantity > 0) {
          const { quantity, price } = product
          const deliveryProductsProductId = product.id
          const deliveryProductsDeliveryId = response.data.createDelivery?.id
          await API.graphql(
            graphqlOperation(createDeliveryProducts, {
              input: {
                quantity,
                price,
                deliveryProductsProductId,
                deliveryProductsDeliveryId,
              },
            })
          )
        }
      })

      setDrawerVisibility(false)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  return (
    <Form
      form={deliveryForm}
      name="deliveryForm"
      initialValues={{ ['date']: moment(deliveryFormData.date, 'YYYY-MM-DD') }}
      onFinish={addDelivery}
    >
      <Form.Item label="DatePicker" name="date">
        <DatePicker name="date" disabledDate={disabledDate} />
      </Form.Item>
      {!stateLoading ? (
        <List
          itemLayout="horizontal"
          dataSource={products.map((p) => ({
            ...p,
            quantity:
              defaultProductsDelivery.find((pd) => pd.id === p.id)?.quantity ||
              0,
          }))}
          renderItem={(item) => (
            <List.Item
              actions={[
                <InputNumber
                  min={0}
                  defaultValue={item.quantity}
                  onChange={(value) =>
                    handleChangeQuantityStock(value, item.id)
                  }
                />,
              ]}
            >
              <List.Item.Meta
                title={item.name}
                description={item.description}
              />
            </List.Item>
          )}
        />
      ) : (
        <Skeleton active />
      )}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={loading}
        >
          {deliveryFormData.id ? 'Actualizar' : 'Crear'}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default DeliveryForm
