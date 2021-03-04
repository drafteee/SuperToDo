import Loadable from '@axiomhq/react-loadable'
import React from 'react'

const GoalsLanguage = Loadable({
  loader: () => import('../containers/Goals'),
  loading: () => <h1>Loading...</h1>,
})

export const goalsLoadables = {
  GoalsLanguage
}
