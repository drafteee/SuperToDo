import Loadable from '@axiomhq/react-loadable'
import React from 'react'

const FoodLanguage = Loadable({
  loader: () => import('../containers/Food'),
  loading: () => <h1>Loading...</h1>,
})

export const foodLoadables = {
  FoodLanguage
}
