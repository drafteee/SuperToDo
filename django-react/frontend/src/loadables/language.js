import Loadable from '@axiomhq/react-loadable'
import React from 'react'

const LoadableLanguage = Loadable({
  loader: () => import('../containers/Language'),
  loading: () => <h1>Loading...</h1>,
})

export const languageLoadables = {
  LoadableLanguage
}
