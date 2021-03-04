import React, {
  useEffect, useState
} from 'react'
import {
  Switch, Route
} from 'react-router-dom'
import {
  homeLoadables, calendarLoadables, foodLoadables,
  goalsLoadables, languageLoadables, settingsLoadables
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
        path='/calendar'
        component={calendarLoadables.CalendarLanguage}
        exact />
      <Route
        path='/food'
        component={foodLoadables.FoodLanguage}
        exact />
      <Route
        path='/goals'
        component={goalsLoadables.GoalsLanguage}
        exact />
      <Route
        path='/language'
        component={languageLoadables.LoadableLanguage}
        exact />
      <Route
        path='/settings'
        component={settingsLoadables.SettingsLanguage}
        exact />

      <Route
        path='*'
        exact
        component={NotFound} />
    </Switch>
  )
}
export default Routes
