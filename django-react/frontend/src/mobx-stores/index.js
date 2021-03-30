import {
  createContext
} from 'react'
import {
  configure
} from 'mobx'
import EnglishStore from './EnglishStore'
import NotifyStore from './NotifyStore'


configure({
  enforceActions: 'always'
})

class RootStore {
  constructor() {
    this.englishStore = new EnglishStore(this)
    this.notifyStore = new NotifyStore(this)

  }
}

export default new RootStore()
