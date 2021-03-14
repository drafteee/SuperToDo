import {
  computed, observable, action
} from 'mobx'

class EnglishStore {

  @observable firstName = 'Caio';
  @observable lastName = 'Vaccaro';

  @computed get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  @action
  setFirstName = (name) => { this.firstName = name };
}

export default EnglishStore