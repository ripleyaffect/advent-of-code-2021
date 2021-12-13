import { range } from '~/lib'

import INPUT from './input'
import { Point, doFold, parseInput, getPointInPoints } from './part-one'

const printPoints = (points: Point[]) => {
  const maxX = Math.max(...points.map(({ x }) => x))
  const maxY = Math.max(...points.map(({ y }) => y))
  return range(maxY + 1).map(
    y => range(maxX + 1).map(
      x => getPointInPoints(points, { x, y }) ? '#' : ' '
    ).join('')
  )
}

const partTwo = (input: string[]) => {
  const { points, folds } = parseInput(input)
  return printPoints(
    folds.reduce(
      (acc, curr) => doFold(acc, curr),
      points
    )
  )
}

export default () => partTwo(INPUT)
