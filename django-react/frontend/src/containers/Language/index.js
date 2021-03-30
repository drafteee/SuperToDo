import React, {
  useEffect
} from 'react'
import {
  inject, observer
} from 'mobx-react'
var qs = require('qs')
import {
  Row, Col, Form, Input, Button
} from 'antd'
import axios from 'axios'
const formItemLayout =
{
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 14,
  },
}

const Language = (props) => {
  const [form] = Form.useForm()

  useEffect(() => {
    axios
      .get('http://localhost:8000/dictionary/')
      .then((res) => console.log(res))
  })

  const onFinish = (values) => {
    console.log('Success:', values)
    axios
      .post('http://localhost:8000/dictionary/create/', qs.stringify(values))
      .then((res) => console.log('success'))
  }

  console.log(props)
  return (
    <Row justify='center'>
      <Col span={16}>
        List
      </Col>
      <Col span={6}>
        <Form
          layout='vertical'
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            label='English Word'
            name='eng'>
            <Input placeholder='english' />
          </Form.Item>
          <Form.Item
            label='Translated Word'
            name='rus'>
            <Input placeholder='translated' />
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'>Save
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default inject(stores => ({
  EnglishStore: stores.rootStore.englishStore
}))(observer(Language))