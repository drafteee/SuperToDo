import React, {
  useRef, useState, useEffect
} from 'react'
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
  faHome, faLanguage, faUtensils, faCalendar, faBullseye, faCogs
} from '@fortawesome/free-solid-svg-icons'
import {
  animated,
  useSpring,
  useSprings,
  useChain
} from 'react-spring'
import './style.css'
import {
  Link, useRouteMatch
} from 'react-router-dom'

const menuItems = [
  faHome,
  faLanguage,
  faUtensils,
  faCalendar,
  faBullseye,
  faCogs
]

const menuNames = [
  '/',
  '/language',
  '/food',
  '/calendar',
  '/goals',
  '/settings'
]

const Menu = ({
  springsRef, ...props
}) => {
  const location = useRouteMatch('/:slug')

  const [current, setCurr] = useState(location ? menuNames.findIndex(x => x === location.url) : 0)

  //#region Animation
  const [cancelAnim, setCA] = useState(false)

  const delayValue = 40
  const springs = useSprings(
    menuItems.length,
    menuItems.map((item, i) => ({
      ref: springsRef,
      item: i,
      delay: i * delayValue,
      opacity: 1,
      x: '0%',
      y: '29%',
      from: {
        opacity: 0,
        x: '-100%',
        y: '-100%',
      },
      onRest: () => {
        setCA(true)
      }
    }))
  )
  //#endregion

  return (
    <ul className='menu'>{springs.map(({
      x, y, ...props
    }, i) => (
      <animated.li
        className={`radius_menu ${i === current && cancelAnim ? 'selected ' : ''}`}
        key={i}
        style={{
          transform: x.interpolate((x) => `translateX(${x})`),
          boxShadow: y.interpolate((y) => `0px 0px 4px 0px rgb(0 0 0 / ${y})`),
          ...props
        }}
      >
        <Link
          to={menuNames[i]}
          onClick={() => setCurr(i)}>
          <FontAwesomeIcon
            icon={menuItems[i]}
            inverse={i === current ? true : false}
          />
        </Link>

      </animated.li>
    ))}
    </ul>
  )
}

export default Menu