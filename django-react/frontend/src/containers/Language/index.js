import React from 'react'
import {
  inject, observer
} from 'mobx-react'

const Language = (props) => {
  console.log(props)
  return (
    <div>
      Language
    </div>
  )
}

export default inject(stores => ({
  EnglishStore: stores.rootStore.englishStore
}))(observer(Language))