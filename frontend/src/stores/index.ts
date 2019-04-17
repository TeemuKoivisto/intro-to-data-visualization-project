import { PollStore } from './PollStore'

export class Stores {
  public pollStore: PollStore

  constructor() {
    this.pollStore = new PollStore()
  }
}
