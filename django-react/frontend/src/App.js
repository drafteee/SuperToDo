import React, {
  useState,
  useRef
} from 'react'
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
  faCalendarDay
} from '@fortawesome/free-solid-svg-icons'


import {
  animated,
  useSpring,
  useSprings,
  useChain
} from 'react-spring'
import {
  Layout
} from 'antd'
import './App.css'
import {
  Header
} from 'antd/lib/layout/layout'
import Menu from './containers/Menu'
import ObserveInfo from './containers/ObserveInfo'
const {
  Content
} = Layout


const App = (props) => {

  const springRef = useRef()

  const {
    ...springProp
  } = useSpring({
    ref: springRef,
    overflow: 'auto',
    from: {
      overflow: 'hidden',
    }
  })

  const springRefM = useRef()

  const {
    ...springProps
  } = useSpring({
    ref: springRefM,
    transform: 'scale(1)',
    from: {
      transform: 'scale(2)',
    }
  })
  const springRefM2 = useRef()

  const {
    ...springProps2
  } = useSpring({
    ref: springRefM2,
    padding: '1% 2%',
    from: {
      padding: '0% 0%',
    }
  })

  const springRefC = useRef()

  const {
    ...springPropsC
  } = useSpring({
    ref: springRefC,
    width: '100px',
    from: {
      width: '0px'
    }
  })

  const springRefL = useRef()

  const {
    ...springPropsL
  } = useSpring({
    ref: springRefL,
    opacity: 1,
    from: {
      opacity: 0
    }
  })

  const springsRef = useRef()

  useChain(
    [springRefM, springRefM2, springRefC, springRefL, springsRef], [0, 0.5, 0.8, 1, 1]
  )
  return (
    <Layout
      style={{
        height: '100vh',
        background: 'none',
        overflow: 'hidden'
      }}>
      <animated.div
        className='notify_border'
        style={{
          ...springProps,
          ...springProps2
        }}>
        <Header className='header'>
          <animated.div
            className='header_menu'
            style={springPropsC}>
            <animated.div
              className='logo'
              style={springPropsL}>
              <span className='back_logo radius_menu'>
                <FontAwesomeIcon
                  icon={faCalendarDay}
                  style={{
                    fontSize: '36px'
                  }}
                />
              </span>

            </animated.div>
            <Menu springsRef={springsRef} />
          </animated.div>
          <Content className='main_content'>
            <ObserveInfo />
            <div />
          </Content>
        </Header>
      </animated.div>
    </Layout>
  )
}

export default App