import INPUT from './input'

import {
  applyLine,
  getGrid,
  getIntersectionPoints,
  parseInput
} from './part-one'

const partTwo = (input: string[]) => {
  const lines = parseInput(input)
  const grid = getGrid()
  lines.forEach(line => applyLine(grid, line))
  return getIntersectionPoints(grid)
}

export default () => partTwo(INPUT)
