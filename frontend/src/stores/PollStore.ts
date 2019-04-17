import { action, runInAction, observable } from 'mobx'
import * as pollApi from '../api/poll.api'

import { IGuardianPoll } from '../types/poll'

export class PollStore {
  @observable guardianPolls: IGuardianPoll[] = []
  @observable guardianResults: IGuardianPoll[] = []

  @action
  getGuardianData = async () => {
    const polls = await pollApi.getGuardianPolls()
    const elections = await pollApi.getGuardianElectionResults()
    runInAction(() => {
      this.guardianPolls = polls
      this.guardianResults = elections
    })
  }
}
