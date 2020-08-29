import React, { useState, useEffect } from 'react'
import {
  PlusOutlined,
  FormOutlined,
  CloseOutlined,
  CheckOutlined,
} from '@ant-design/icons'
import { Tooltip, Button, Drawer, List, Avatar, Statistic, Badge } from 'antd'
import { API, graphqlOperation } from 'aws-amplify'
import { onCreateProduct, onUpdateProduct } from '../graphql/subscriptions'
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from '../graphql/mutations'
import ProductForm from './products/ProductForm'
import { useAppStateContext } from '../context/AppState'

export type Product = {
  id?: string
  name: string
  description: string
  price: number
  _version?: number
  _deleted?: boolean
}

type SubscriptionEvent<D> = {
  value: {
    data: D
  }
}

const ProductPage = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [localError, setLocalError] = useState<any>()
  const [drawerVisibility, setDrawerVisibility] = useState<boolean>(false)
  const {
    dispatch,
    productsFormData,
    initialState,
    products,
    getProductList,
  } = useAppStateContext()

  useEffect(() => {
    if (!products.length) getProductList()

    const subscription = (API.graphql(
      graphqlOperation(onCreateProduct)
    ) as any).subscribe({
      next: (eventData: SubscriptionEvent<{ onCreateProduct: Product }>) => {
        const payload = eventData.value.data.onCreateProduct
        dispatch({ type: 'SUBSCRIPTION_PRODUCT', payload })
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
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: 'SET_PRODUCT_FORM_DATA',
      payload: { [e.target.name]: e.target.value },
    })

  const handleSubmitForm = () => {
    if (productsFormData.id) {
      editProduct()
    } else {
      createNewProduct()
    }
  }

  const createNewProduct = async () => {
    setLoading(true)
    const { name, description, price } = productsFormData

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
    const { id, name, description, price, _version } = productsFormData

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

  /* const handleDeleteProduct = async (item: Product) => {
    setLoading(true)

    const { id, _version } = item

    const product = {
      id,
      _version,
    }

    try {
      await API.graphql(graphqlOperation(deleteProduct, { input: product }))

      setLoading(false)
      setDrawerVisibility(false)
    } catch (err) {
      setLocalError(err)
      setLoading(false)
      console.log(err)
    }
  } */

  const handleEditProduct = (product: Product) => {
    dispatch({
      type: 'SET_PRODUCT_FORM_EDIT_DATA',
      payload: { ...product },
    })
    setDrawerVisibility(true)
  }

  const toggleDrawer = (open: boolean) => {
    if (open === false) {
      dispatch({
        type: 'SET_PRODUCT_FORM_EDIT_DATA',
        payload: {
          ...initialState.productsFormData,
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
        dataSource={products.filter((p) => !p._deleted)}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Statistic title="Precio" value={item.price} precision={2} />,
              <Badge
                className="site-badge-count-109"
                count={30}
                style={{ backgroundColor: '#52c41a' }}
              />,
              /* item._deleted ? 'Inactivo' : 'Activo',
              !item._deleted ? (
                <Tooltip title="Desactivar">
                  <Button
                    shape="circle"
                    icon={<CloseOutlined />}
                    size="small"
                    onClick={() => handleDeleteProduct(item)}
                  />
                </Tooltip>
              ) : (
                <Tooltip title="Activar">
                  <Button
                    shape="circle"
                    icon={<CheckOutlined />}
                    size="small"
                    onClick={() => handleDeleteProduct(item)}
                  />
                </Tooltip>
              ), */
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
          productsFormData.id ? 'Actualizar Producto' : 'Crear nuevo producto'
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
          formData={productsFormData}
        />
      </Drawer>
    </div>
  )
}

export default ProductPage
