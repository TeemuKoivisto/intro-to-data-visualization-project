import * as React from 'react'
import { inject, observer } from 'mobx-react'
import styled from '../theme/styled'

import { PollLineChart } from '../components/Charts'
// import { Button } from '../elements/Button'

import { Stores } from '../stores'

import { PollStore } from '../stores/PollStore'
// import { IGuardianPoll } from '../types/poll'

interface IProps {
  pollStore?: PollStore,
}

@inject((stores: Stores) => ({
  pollStore: stores.pollStore
}))
@observer
export class FrontPage extends React.Component<IProps> {
  componentDidMount() {
    this.props.pollStore!.getGuardianData()
  }
  render() {
    const { guardianPolls, guardianResults } = this.props.pollStore!
    return (
      <FrontPageContainer>
        <header>
          <h1><a href="https://teemukoivisto.github.io/intro-to-data-visualization-project/">Interactive Data Visualization Project: Spring 2019</a></h1>
          <p>British Poll data visualization by Teemu Koivisto</p>
          <p><a href="https://github.com/teemukoivisto/intro-to-data-visualization-project">Github repo</a></p>
        </header>
        <div>
          <PollLineChart polls={guardianPolls} results={guardianResults}/>
        </div>
      </FrontPageContainer>
    )
  }
}

const FrontPageContainer = styled.div`
`
