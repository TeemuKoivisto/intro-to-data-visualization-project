import { UserStore } from './UserStore'

export class Stores {
  public userStore: UserStore

  constructor() {
    this.userStore = new UserStore()
  }
}
