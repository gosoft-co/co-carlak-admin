import React, { useState, useReducer, useEffect } from 'react'
import { PlusOutlined, FormOutlined } from '@ant-design/icons'
import { Tooltip, Button, Drawer, List, Avatar, Statistic } from 'antd'
import { API, graphqlOperation } from 'aws-amplify'
import { onCreateProduct, onUpdateProduct } from '../graphql/subscriptions'
import { listProducts } from '../graphql/queries'
import { ListProductsQuery } from '../API'
import { createProduct, updateProduct } from '../graphql/mutations'
import ProductForm from './products/ProductForm'

export type Product = {
  id?: string
  name: string
  description: string
  price: number
  _version?: number
}

type AppState = {
  products: Product[]
  formData: Product
}

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'QUERY':
      return { ...state, products: action.payload }
    case 'SUBSCRIPTION':
      return { ...state, products: [...state.products, action.payload] }
    case 'SET_FORM_DATA':
      return { ...state, formData: { ...state.formData, ...action.payload } }
    case 'SET_FORM_EDIT_DATA':
      return { ...state, formData: { ...state.formData, ...action.payload } }
    case 'UPDATE_PRODUCT_ITEM':
      return {
        ...state,
        products: state.products.map((product, i) =>
          product.id === action.payload.id ? action.payload : product
        ),
      }
    default:
      return state
  }
}

type Action =
  | {
      type: 'QUERY'
      payload: Product[]
    }
  | {
      type: 'SUBSCRIPTION'
      payload: Product
    }
  | {
      type: 'SET_FORM_DATA'
      payload: { [field: string]: string }
    }
  | {
      type: 'SET_FORM_EDIT_DATA'
      payload: Product
    }
  | {
      type: 'UPDATE_PRODUCT_ITEM'
      payload: Product
    }

type SubscriptionEvent<D> = {
  value: {
    data: D
  }
}

const initialState: AppState = {
  products: [],
  formData: {
    name: '',
    description: '',
    price: 0,
  },
}

const ProductPage = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [localError, setLocalError] = useState<any>()
  const [drawerVisibility, setDrawerVisibility] = useState<boolean>(false)
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getProductList()
    const subscription = (API.graphql(
      graphqlOperation(onCreateProduct)
    ) as any).subscribe({
      next: (eventData: SubscriptionEvent<{ onCreateProduct: Product }>) => {
        const payload = eventData.value.data.onCreateProduct
        dispatch({ type: 'SUBSCRIPTION', payload })
      },
    })

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    const onUpdateSubscription = (API.graphql(
      graphqlOperation(onUpdateProduct)
    ) as any).subscribe({
      next: (eventData: SubscriptionEvent<{ onUpdateProduct: Product }>) => {
        const payload = eventData.value.data.onUpdateProduct
        dispatch({ type: 'UPDATE_PRODUCT_ITEM', payload })
      },
    })

    return () => onUpdateSubscription.unsubscribe()
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: 'SET_FORM_DATA',
      payload: { [e.target.name]: e.target.value },
    })

  const getProductList = async () => {
    const products = (await API.graphql(graphqlOperation(listProducts))) as {
      data: ListProductsQuery
    }
    dispatch({
      type: 'QUERY',
      payload: products.data.listProducts?.items as Product[],
    })
  }

  const handleSubmitForm = () => {
    if (state.formData.id) {
      editProduct()
    } else {
      createNewProduct()
    }
  }

  const createNewProduct = async () => {
    setLoading(true)
    const { name, description, price } = state.formData

    const product = {
      name,
      description,
      price,
    }
    try {
      await API.graphql(graphqlOperation(createProduct, { input: product }))
      setLoading(false)
      setDrawerVisibility(false)
    } catch (err) {
      setLocalError(err)
      setLoading(false)
      console.log(err)
    }
  }

  const editProduct = async () => {
    setLoading(true)
    const { id, name, description, price, _version } = state.formData

    const product = {
      id,
      name,
      description,
      price,
      _version,
    }

    try {
      await API.graphql(graphqlOperation(updateProduct, { input: product }))

      setLoading(false)
      setDrawerVisibility(false)
    } catch (err) {
      setLocalError(err)
      setLoading(false)
      console.log(err)
    }
  }

  const handleEditProduct = (product: Product) => {
    dispatch({
      type: 'SET_FORM_EDIT_DATA',
      payload: { ...product },
    })
    setDrawerVisibility(true)
  }

  const toggleDrawer = (open: boolean) => {
    if (open === false) {
      dispatch({
        type: 'SET_FORM_EDIT_DATA',
        payload: {
          ...initialState.formData,
          id: undefined,
          _version: undefined,
        },
      })
    }
    setDrawerVisibility(open)
  }

  return (
    <div>
      <Tooltip title="Nuevo producto">
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          style={{ marginBottom: 10 }}
          onClick={() => toggleDrawer(true)}
        />
      </Tooltip>
      <List
        itemLayout="horizontal"
        dataSource={state.products}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Statistic title="Precio" value={item.price} precision={2} />,
              <Tooltip title="Editar">
                <Button
                  shape="circle"
                  icon={<FormOutlined />}
                  size="small"
                  onClick={() => handleEditProduct(item)}
                />
              </Tooltip>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src="http://lorempixel.com/48/48/food/" />}
              title={item.name}
              description={item.description}
            />
          </List.Item>
        )}
      />
      <Drawer
        title={
          state.formData.id ? 'Actualizar Producto' : 'Crear nuevo producto'
        }
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
        <ProductForm
          loading={loading}
          handleChange={handleChange}
          handleSubmitForm={handleSubmitForm}
          formData={state.formData}
        />
      </Drawer>
    </div>
  )
}

export default ProductPage
