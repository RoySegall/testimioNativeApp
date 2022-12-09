import { action, computed, makeObservable, observable } from 'mobx';
import { User } from './types';
import { users } from './dummyData/users';

export class UserStore {
  @observable user: User | undefined;
  @observable name = '';

  constructor() {
    makeObservable(this);
  }

  @action.bound login(username: string, password: string) {
    if (username === 'moshe' && password === 'whisky') {
      this.user = users.moshe;
    }
  }

  @computed get username() {
    return this.user?.username;
  }
}

export const userStore = new UserStore();
