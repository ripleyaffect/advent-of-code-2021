import INPUT from './input'
import { Point, getAdjacentPoints, parseInput } from './part-one'

const fill = (point: Point, rows: Point[][]) => {
  // End condition
  if (
    point.visited ||
    point.value === 9
  ) return []

  // Mark point as visited
  point.visited = true

  return getAdjacentPoints(point, rows).reduce(
    (acc, curr) => acc.concat(fill(curr, rows)),
    [point]
  )
}

const partTwo = (input: string[]) => {
  const rows = parseInput(input)
  const lakes = rows.reduce(
    (acc, row) => acc.concat(
      row.map(point =>
        (point.visited || point.value === 9)
          ? 0
          : fill(point, rows).length
      )
    ),
    []
  )

  lakes.sort((a, b) => a > b ? 1 : -1)

  return lakes.reverse().slice(0, 3).reduce(
    (acc, curr) => acc * curr,
    1
  )
}

export default () => partTwo(INPUT)
