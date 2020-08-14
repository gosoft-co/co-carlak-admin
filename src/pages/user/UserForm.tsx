import React, { useState } from 'react'
import { Form, Input, Button, Select } from 'antd'

const { Option } = Select

export interface User {
  username: string
  password: string
  email: string
  name: string
  family_name: string
  gender: string
  birthdate: string
  address: string
  phone_number: string
}

const initialState = {
  username: '',
  password: '',
  email: '',
  name: '',
  family_name: '',
  gender: '',
  birthdate: '',
  address: '',
  phone_number: '',
}

export type CompleteRegistrationHandler = (user: User) => void

export interface IState {
  loading: boolean
  error: any
  completeHandler: CompleteRegistrationHandler
}

const UserForm = ({ completeHandler, error, loading }: IState) => {
  const [formState, setFormState] = useState<User>(initialState)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleRegister = async () => {
    const { email, username, password } = formState

    if (!email || !username || !password) {
      return
    }
    completeHandler(formState)
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="+57">+57</Option>
      </Select>
    </Form.Item>
  )

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  }

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  }

  return (
    <Form
      {...formItemLayout}
      name="user_form"
      className="user-form"
      initialValues={{ remember: true, prefix: '+57' }}
      onFinish={handleRegister}
    >
      <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            required: true,
            message: 'Por favor digite el username!',
          },
          {
            whitespace: false,
            message: 'username inválido!',
          },
        ]}
        hasFeedback
      >
        <Input name="username" onChange={handleChange} placeholder="Usuario" />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'El E-mail ingresado es inválido!',
          },
          {
            required: true,
            message: 'Por favor digite el email!',
          },
        ]}
        hasFeedback
      >
        <Input name="email" onChange={handleChange} placeholder="E-mail" />
      </Form.Item>

      <Form.Item name="name" label="Nombres" hasFeedback>
        <Input name="name" onChange={handleChange} placeholder="Nombre" />
      </Form.Item>

      <Form.Item name="family_name" label="Apellidos" hasFeedback>
        <Input
          name="family_name"
          onChange={handleChange}
          placeholder="Apellidos"
        />
      </Form.Item>

      <Form.Item
        name="phone"
        label="# Celular"
        rules={[
          {
            required: false,
            message: 'Por favor escriba el número de celular!',
          },
          { len: 10, message: 'Número de celular inválido!' },
        ]}
        hasFeedback
      >
        <Input
          addonBefore={prefixSelector}
          style={{ width: '100%' }}
          name="phone_number"
          onChange={handleChange}
          placeholder="# Celular"
        />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Por favor escriba un password temporal!',
          },
        ]}
        hasFeedback
      >
        <Input.Password
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirmar Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Por favor confirme el password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject('Los password ingresados no coinciden!')
            },
          }),
        ]}
      >
        <Input.Password
          name="password"
          placeholder="Confirmación de Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={loading}
        >
          Crear Usuario
        </Button>
      </Form.Item>
    </Form>
  )
}

export default UserForm
