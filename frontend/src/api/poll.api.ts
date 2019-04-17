import { IGuardianPoll } from '../types/poll'

import {
  getCsv
} from './methods'

const parseGuardianData = (row: any) => ({
  date: row.date,
  CON: parseFloat(row.CON),
  LAB: parseFloat(row.LAB),
  LIBDEM: parseFloat(row['LIB DEM']),
  OTHER: parseFloat(row.OTHER),
})

export const getGuardianPolls = () =>
  getCsv<IGuardianPoll[]>(require('./guardian-polls.csv'), parseGuardianData)

export const getGuardianElectionResults = () =>
  getCsv<IGuardianPoll[]>(require('./guardian-election-results.csv'), parseGuardianData)
