import React from 'react'
import {
  Typography
} from 'antd'
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
  faEnvelope, faBell, faUser
} from '@fortawesome/free-solid-svg-icons'

import './style.css'

const {
  Title
} = Typography

const ObserveInfo = () => {
  return (
    <section className='row_observe'>
      <span className='overview'>
        <Title>Overview</Title>
        <Title level={5}>Hello, nigga</Title>
      </span>
      <div className='account_info'>
        <div className='notify'>
          <FontAwesomeIcon
            icon={faEnvelope}
          />
          <FontAwesomeIcon
            icon={faBell}
          />
        </div>
        <span className='account'>
          <div>
            <FontAwesomeIcon
              icon={faUser}
            />
          </div>

        </span>
      </div>
    </section>
  )
}
export default ObserveInfo