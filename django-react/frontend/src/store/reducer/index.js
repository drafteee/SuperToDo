import {
  combineReducers
} from 'redux'
import alertReducer from './alert'
import {
  routerReducer
} from 'react-router-redux'

export default combineReducers({
  router: routerReducer,
  alertReducer
})
