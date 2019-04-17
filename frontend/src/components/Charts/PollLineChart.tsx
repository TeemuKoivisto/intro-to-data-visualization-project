import * as React from 'react'
import {
  LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts'
import styled from '../../theme/styled'

import { IGuardianPoll } from '../../types/poll'

interface IProps {
  className?: string
  polls: IGuardianPoll[]
  results: IGuardianPoll[]
}

class PollLineChartClass extends React.PureComponent<IProps> {
  render() {
    const { className, polls, results } = this.props
    return (
      <LChart
        className={className}
        width={1200}
        height={1000}
        data={polls}
        margin={{
          top: 5, right: 10, left: 5, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        { results.map(r => <ReferenceLine key={r.date} x={r.date} isFront={true} stroke="red" label="Election" />)}
        <Line type="monotone" dataKey="CON" stroke="#0087DC" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="LAB" stroke="#DC241f" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="LIBDEM" stroke="#FAA61A" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="OTHER" stroke="#82ca9d" activeDot={{ r: 8 }}/>
      </LChart>
    )
  }
}
export const PollLineChart = styled(PollLineChartClass)``
