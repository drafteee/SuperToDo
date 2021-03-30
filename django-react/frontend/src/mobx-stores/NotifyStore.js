import {
  computed, observable, action
} from 'mobx'

class NotifyStore {

  @observable errors = null;
  @observable isEmpty = false;
  @observable messages = [1, 2];
  @observable timeouts = [1];
  @observable reminders = null;

  @computed get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  @action
  setFirstName = (name) => { this.firstName = name };
}

export default NotifyStore