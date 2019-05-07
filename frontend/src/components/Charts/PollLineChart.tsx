import * as React from 'react'
import {
  LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ReferenceArea, LabelList
} from 'recharts'
import styled from '../../theme/styled'

import { IGuardianPoll } from '../../types/poll'

interface IProps {
  className?: string
  polls: IGuardianPoll[]
  results: IGuardianPoll[]
}

// const CustomLabel = (props: LabelProps) =>
//   <text 
//     x={props.x} 
//     y={props.y} 
//     dy={-4} 
//     fontSize='16' 
//     fontFamily='sans-serif'
//     fill={props.fill}
//     textAnchor="middle"
//   >{props.value}%</text>

// class CustomLabel extends Label {
//   render() {
//     const props = this.props
//     return (
//       <text 
//       x={props.x} 
//       y={props.y} 
//       dy={-4} 
//       fontSize='16' 
//       fontFamily='sans-serif'
//       fill={props.fill}
//       textAnchor="middle"
//     >{props.value}%</text>
//     )
//   }
// }

const COLORS = {
  CON: "#0087DC",
  LAB: "#DC241f",
  LIBDEM: "#FAA61A",
  OTHER: "#82ca9d"
}

const wonElection = (r: IGuardianPoll) => Object.keys(r).reduce((acc, cur) => {
  const pc = r[cur]
  if (acc[1] < pc)  {
    return [cur, pc] as [string, number]
  }
  return acc
}, ['', 0] as [string, number])
const getColor = (key: string) => COLORS[key]

class PollLineChartClass extends React.PureComponent<IProps> {
  render() {
    const { className, polls, results } = this.props
    const areas = results.reduce((acc, cur, i) => {
      let x1 = cur.date, x2
      if (i === 0) {
        const wonParty = wonElection(cur)
        acc.push({ x1: polls[i].date, x2: results[i].date, y1: 0, y2: 0.8, color: getColor(wonParty[0]) })
      }
      if (i === results.length - 1) {
        x2 = polls[polls.length - 1].date
      } else {
        x2 = results[i + 1].date
      }
      const wonParty = wonElection(cur)
      acc.push({ x1, x2, y1: 0, y2: 0.8, color: getColor(wonParty[0]) })
      return acc
    }, [] as any[])
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
        <XAxis dataKey="date">
        <LabelList dataKey="date" position="right" angle={45}  />

        </XAxis>
        <YAxis />
        <Tooltip />
        <Legend />
        { results.map(r => <ReferenceLine key={r.date} x={r.date} isFront={true} stroke="red" label="Election" />)}
        { areas.map(a => <ReferenceArea key={a.x1 + a.x2} x1={a.x1} x2={a.x2} y1={a.y1} y2={a.y2} fill={a.color} fillOpacity={0.1} />)}
        <Line type="monotone" dataKey="CON" stroke="#0087DC" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="LAB" stroke="#DC241f" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="LIBDEM" stroke="#FAA61A" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="OTHER" stroke="#82ca9d" activeDot={{ r: 8 }}/>
        <ReferenceArea x1={150} x2={180} y1={200} y2={300} stroke="red" strokeOpacity={0.3} />
      </LChart>
    )
  }
}
export const PollLineChart = styled(PollLineChartClass)``
