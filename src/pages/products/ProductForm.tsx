import React, { useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import { Product } from '../Product'

interface IState {
  loading: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmitForm: () => void
  formData: Product
}

const ProductForm = ({
  loading,
  handleChange,
  handleSubmitForm,
  formData,
}: IState) => {
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ ...formData })
  }, [formData])

  return (
    <Form
      form={form}
      name="form"
      className="login-form"
      initialValues={{
        ['name']: formData.name,
        ['description']: formData.description,
        ['price']: formData.price,
      }}
      onFinish={handleSubmitForm}
    >
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Por favor digite el nombre del producto!',
          },
        ]}
      >
        <Input
          name="name"
          onChange={handleChange}
          placeholder="Nombre de Producto"
        />
      </Form.Item>

      <Form.Item name="description">
        <Input
          name="description"
          onChange={handleChange}
          placeholder="Descripción"
        />
      </Form.Item>

      <Form.Item
        name="price"
        rules={[
          {
            required: true,
            message: 'Por favor digite el valor del producto!',
          },
        ]}
      >
        <Input name="price" onChange={handleChange} placeholder="Valor" />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={loading}
        >
          {formData.id ? 'Actualizar' : 'Crear'}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ProductForm
