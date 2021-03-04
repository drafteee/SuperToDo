import React, {
  useRef, useState
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

const menuItems = [
  faHome,
  faLanguage,
  faUtensils,
  faCalendar,
  faBullseye,
  faCogs
]

const Menu = ({
  springsRef
}) => {

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


  return (
    <ul className='menu'>{springs.map(({
      x, y, ...props
    }, i) => (
      <animated.li
        className={`radius_menu ${i === 0 && cancelAnim ? 'selected ' : ''}`}
        key={i}
        style={{
          transform: x.interpolate((x) => `translateX(${x})`),
          boxShadow: y.interpolate((y) => `0px 0px 4px 0px rgb(0 0 0 / ${y})`),
          ...props
        }}
      >
        <FontAwesomeIcon
          icon={menuItems[i]}
        />
      </animated.li>
    ))}
    </ul>
  )
}

export default Menu