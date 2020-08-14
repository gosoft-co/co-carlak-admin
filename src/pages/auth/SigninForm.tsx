import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

interface FormValues {
  [key: string]: string | boolean | undefined
  username?: string
  password?: string
}

interface TouchValues {
  [key: string]: string | boolean | undefined
  username?: boolean
  password?: boolean
}

interface ErrorValues {
  [key: string]: string | boolean | undefined
  username?: string
  password?: string
}

interface FormState {
  isValid: boolean
  values: FormValues
  touched: TouchValues
  errors: ErrorValues
}

export interface IState {
  loading: boolean
  error: any
  success?: boolean
  signInHandler: (username: string, password: string) => void
  toggleRegister: (register?: boolean) => void
  resendCode: (
    type: 'password' | 'authentication',
    username?: string,
    redirect?: boolean
  ) => void
}

const SigninForm = ({
  signInHandler,
  toggleRegister,
  resendCode,
  error,
  loading,
  success,
}: IState) => {
  const [formState, setFormState] = useState<FormState>({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  })

  /* useEffect(() => {
        const errors: any = validate(formState.values, schema)
        setFormState(formState => ({
          ...formState,
          isValid: errors ? false : true,
          errors: errors || {}
        }))
      }, [formState.values]) */

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist()

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }))
  }

  const handleSignIn = async () => {
    /*  if(!formState.isValid) {
          return
        } */
    const username = formState.values.username
    const password = formState.values.password
    if (!username || !password) {
      return
    }
    signInHandler(username, password)
  }

  const handleResend = (event: any) => {
    event.preventDefault()
    const { username } = formState.values

    resendCode('password', username, true)
  }

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={handleSignIn}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          name="username"
          onChange={handleChange}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  )
}

export default SigninForm
