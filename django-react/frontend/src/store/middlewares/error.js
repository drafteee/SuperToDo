import {
  alertConstants
} from '../constants'
//import notice from '../../components/Notice'


const errorMiddleware = (store) => (next) => (action) => {
  if (action.payload?.err) {
    if (action.payload.err.data)
      //notice('error', action.payload.err.data.code, action.payload.err.data.errors)
      console.log('error')
    store.dispatch({
      type: alertConstants.ERROR,
      payload: action.payload.err
    })
  }
  next(action)
}

export default errorMiddleware
