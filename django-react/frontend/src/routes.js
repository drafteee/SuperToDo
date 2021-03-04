import React, {
  useEffect, useState
} from 'react'
import {
  Switch, Route
} from 'react-router-dom'
import {
  homeLoadables,
} from './loadables'
import NotFound from './components/NotFound'

const Routes = () => {

  return (
    <Switch>
      <Route
        path='/'
        component={homeLoadables.LoadableHome}
        exact />

      <Route
        path='*'
        exact
        component={NotFound} />
    </Switch>
  )
}
export default Routes
