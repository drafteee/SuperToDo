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
  faCalendarDay, faChevronLeft, faChevronRight
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
  const [closeMenu, setcloseMenu] = useState(false)
  //#region springAppAnimation

  const springRefA = useRef()

  const {
    ...springPropsA
  } = useSpring({
    ref: springRefA,
    display: 'flex',
    from: {
      display: 'none',
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
    width: closeMenu ? '0px' : '100px',
    //display: closeMenu ? 'none' : 'flex',
    from: {
      width: '0px',
      //display: 'none'
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
    [springRefM, springRefM2, springRefC, springRefL, springsRef, springRefA], [0, 0.5, 0.8, 1, 1, 1]
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
        <Router history={history}>
          <animated.div
            style={springPropsA}
            className='close_menu'
            onClick={() => setcloseMenu(state => !state)}>
            <FontAwesomeIcon
              icon={closeMenu ? faChevronLeft : faChevronRight}
            />
          </animated.div>
          <Header className='header'>
            <animated.div
              className='header_menu'
              style={springPropsC}>
              <animated.div
                className='logo'
                style={springPropsL}>
                <span
                  className='back_logo radius_menu'
                  style={{
                    display: closeMenu ? 'none' : 'flex'
                  }}>
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

              <Routes />
            </Content>
          </Header>
        </Router>

      </animated.div>

    </Layout>
  )
}

export default hot(App)