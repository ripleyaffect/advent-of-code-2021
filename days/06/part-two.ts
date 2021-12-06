import INPUT from './input'

import { getFishCountAfterDays, parseInput } from './part-one'

const partTwo = (input: string[]) => getFishCountAfterDays(
  256,
  parseInput(input)
)

export default () => partTwo(INPUT)
