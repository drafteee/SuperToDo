import {
  createStore, applyMiddleware, compose
} from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import {
  routerMiddleware
} from 'react-router-redux'
import history from '../helpers/history'
import errorMiddleware from './middlewares/error'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

// const composeEnhancers = compose

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware, routerMiddleware(history), errorMiddleware) //,signalRMiddleware),
  // other store enhancers if any
)

const inititalState = {}
const store = createStore(rootReducer, inititalState, enhancer)

sagaMiddleware.run(rootSaga)

export default store
