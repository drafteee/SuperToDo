import {
  createContext
} from 'react'
import {
  configure
} from 'mobx'
import EnglishStore from './EnglishStore'


configure({
  enforceActions: 'always'
})

class RootStore {
  constructor() {
    this.englishStore = new EnglishStore(this)

  }
}

export default new RootStore()
