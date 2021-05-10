import {
  computed, observable, action
} from 'mobx'

class EnglishStore {

  @observable firstName = 'Caio';
  @observable lastName = 'Vaccaro';
  
  const data = [
    {
      key: '1',
      rus: 'птица',
      eng: 'bird',
      countRepeat: 1,
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
    {
      key: '2',
      rus: 'Мужчины',
      eng: 'Men',
      countRepeat: 3,
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
    {
      key: '3',
      rus: 'Дом',
      eng: 'Home',
      countRepeat: 2,
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
    {
      key: '4',
      rus: 'Отец',
      eng: 'Father',
      countRepeat: 1,
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
  ];

  @computed get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  @action
  setFirstName = (name) => { this.firstName = name };
}

export default EnglishStore