import INPUT from './input'
import { parseInput, solve } from './part-one'

const partTwo = (input: string[]) => {
  const { template, letterIncreaseMap } = parseInput(input)
  return solve(template, letterIncreaseMap, 40)
}

export default () => partTwo(INPUT)
