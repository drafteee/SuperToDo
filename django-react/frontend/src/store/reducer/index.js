import {
  combineReducers
} from 'redux'
import alertReducer from './alert'
import notifyReducer from './notify'
import {
  routerReducer
} from 'react-router-redux'

export default combineReducers({
  router: routerReducer,
  alertReducer,
  notifyReducer
})
