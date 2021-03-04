import Loadable from '@axiomhq/react-loadable'
import React from 'react'

const LoadableHome = Loadable({
  loader: () => import('../containers/Home'),
  loading: () => <h1>Loading...</h1>,
})

export const homeLoadables = {
  LoadableHome
}
