import React, { useState, useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import { CreateRouteInput, UpdateRouteInput } from '../../API'

export type CreateRouteHandler = (formState: CreateRouteInput | any) => void
export type UpdateRouteHandler = (formState: UpdateRouteInput) => void

export interface IState {
  loading: boolean
  error: any
  setFormState: UpdateRouteHandler
  formState: any
  handleFormRoute: CreateRouteHandler
}

const RouteForm = ({
  handleFormRoute,
  loading,
  error,
  formState,
  setFormState,
}: IState) => {
  const [form] = Form.useForm()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    form.setFieldsValue({ name: formState.name })
  }, [formState])

  return (
    <Form
      form={form}
      name="form"
      className="login-form"
      initialValues={{ ['name']: formState.name }}
      onFinish={handleFormRoute}
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
          loading={loading}
        >
          {formState.id ? 'Actualizar' : 'Crear'}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default RouteForm
