import React, {
  memo
} from 'react'
import {
  Card, Button
} from 'antd'
import {
  notifyActions
} from '../../store/actions'


const Dictionary = memo(() => {

  return (
    <Card
      title='Default size card'
      extra={<a href='#'>More</a>}
      style={{
        width: 300
      }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
      <Button onClick={() => notifyActions.fetchedDog()}>Click me</Button>
    </Card>)

})

export default Dictionary