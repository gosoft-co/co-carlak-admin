import React, { useEffect } from 'react'
import { Form, DatePicker, Button } from 'antd'
import moment, { Moment } from 'moment'
import { useAppStateContext } from '../../context/AppState'

interface IState {
  handleSubmitDeliveryForm: () => void
  loading: boolean
}

const DeliveryForm = ({ handleSubmitDeliveryForm, loading }: IState) => {
  const { deliveryFormData } = useAppStateContext()
  const [deliveryForm] = Form.useForm()

  useEffect(() => {
    deliveryForm.setFieldsValue({
      date: moment(deliveryFormData.date, 'YYYY-MM-DD'),
    })
  }, [deliveryFormData])

  function disabledDate(current: Moment) {
    return current < moment().endOf('day')
  }

  return (
    <Form
      form={deliveryForm}
      name="deliveryForm"
      initialValues={{ ['date']: moment(deliveryFormData.date, 'YYYY-MM-DD') }}
      onFinish={handleSubmitDeliveryForm}
    >
      <Form.Item label="DatePicker" name="date">
        <DatePicker name="date" disabledDate={disabledDate} />
      </Form.Item>
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
