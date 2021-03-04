import Loadable from '@axiomhq/react-loadable'
import React from 'react'

const CalendarLanguage = Loadable({
  loader: () => import('../containers/Calendar'),
  loading: () => <h1>Loading...</h1>,
})

export const calendarLoadables = {
  CalendarLanguage
}
