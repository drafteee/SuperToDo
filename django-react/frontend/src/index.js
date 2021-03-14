import React from 'react'

import ReactDOM from 'react-dom'

import 'antd/dist/antd.css'

import './index.css'

import App from './App'
import {
  Provider
} from 'mobx-react'
// import {
//   Provider
// } from 'react-redux'
//import store from './store'
import stores from './mobx-stores'
import reportWebVitals from './reportWebVitals'



ReactDOM.render(
  <Provider rootStore={stores}>
    <App />
  </Provider>,
  document.getElementById('root')
)



// If you want to start measuring performance in your app, pass a function

// to log results (for example: reportWebVitals(console.log))

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals(console.log);

