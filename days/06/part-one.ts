import { sum } from '~/lib'

import INPUT from './input'

const runDay = (fishCounts) => {
  const newfishCounts = Object.keys(fishCounts).map(Number).reduce(
    (acc, curr) => ({ ...acc, [curr - 1]: fishCounts[curr]  }),
    {}
  )
  if (newfishCounts[-1]) {
    newfishCounts[6] = (newfishCounts[6] || 0) + newfishCounts[-1]
    newfishCounts[8] = (newfishCounts[8] || 0) + newfishCounts[-1]
    delete newfishCounts[-1]
  }
  return newfishCounts
}

const runDays = (days: number, fishCounts) => {
  if (days === 0) return fishCounts
  return runDays(days - 1, runDay(fishCounts))
}

export const getFishCountAfterDays = (days: number, fishCounts) => sum(
  ...Object.values(runDays(days, fishCounts)).map(Number)
)

export const parseInput = (input: string[]) => input[0].split(',').reduce(
  (acc, curr) => ({ ...acc, [curr]: (acc[curr] || 0) + 1 }),
  {}
)

const partOne = (input: string[]) => getFishCountAfterDays(
  80,
  parseInput(input)
)

export default () => partOne(INPUT)
