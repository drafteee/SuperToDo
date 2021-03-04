import React, {
  useState,
  useRef
} from 'react'
import {
  Router
} from 'react-router-dom'
import {
  hot, setConfig
} from 'react-hot-loader/root'
import {
  Layout
} from 'antd'

//#region fontIcon
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
  faCalendarDay
} from '@fortawesome/free-solid-svg-icons'
//#endregion

import {
  animated,
  useSpring,
  useSprings,
  useChain
} from 'react-spring'
import history from './helpers/history'

import Menu from './containers/Menu'
import ObserveInfo from './containers/ObserveInfo'
import Routes from './routes'
import './App.css'

const {
  Content, Header
} = Layout


const App = (props) => {

  //#region springAppAnimation
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
  //#endregion

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
            <Router history={history}>

              <Routes />
            </Router>
          </Content>
        </Header>
      </animated.div>
    </Layout>
  )
}

export default hot(App)