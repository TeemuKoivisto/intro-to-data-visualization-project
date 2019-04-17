import * as React from 'react'
import { inject } from 'mobx-react'
import styled from '../theme/styled'

// import { Button } from '../elements/Button'

import { Stores } from '../stores'

interface IProps {
}

@inject((stores: Stores) => ({
}))
export class FrontPage extends React.PureComponent<IProps> {
  render() {
    return (
      <FrontPageContainer>
        <header>
          <h1>Data Visualization Project: Spring 2019</h1>
          <p>British Poll data visualization by Teemu Koivisto</p>
          <p><a href="https://github.com/teemukoivisto/intro-to-data-visualization-project">Github repo</a></p>
        </header>
      </FrontPageContainer>
    )
  }
}

const FrontPageContainer = styled.div`
`
