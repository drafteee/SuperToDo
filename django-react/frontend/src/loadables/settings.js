import Loadable from '@axiomhq/react-loadable'
import React from 'react'

const SettingsLanguage = Loadable({
  loader: () => import('../containers/Settings'),
  loading: () => <h1>Loading...</h1>,
})

export const settingsLoadables = {
  SettingsLanguage
}
