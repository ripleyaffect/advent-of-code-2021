import INPUT from './input'
import { parseInput, step } from './part-one'

const partTwo = (input: string[]) => {
  const rows = parseInput(input)
  let flashes = 0
  let steps = 0
  while (flashes !== rows.length * rows[0].length) {
    flashes = step(rows)
    steps++
  }
  return steps
}

export default () => partTwo(INPUT)
