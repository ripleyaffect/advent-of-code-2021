import { sum } from '~/lib'

import INPUT from './input'

type Line = {
  start: Point
  end: Point
}

type Point = {
  x: number
  y: number
}

export const getGrid = (length = 1000) => Array.from(
  { length }, () => Array.from({ length }, () => 0)
)

export const parseInput = (input: string[]) => input.map(
  line => {
    const [ [ x1, y1 ], [ x2, y2 ] ] = line.split(' -> ').map(
      point => point.split(',').map(Number)
    )
    return {
      start: { x: x1, y: y1 },
      end: { x: x2, y: y2 },
    }
  }
)

const filterUpDown = (lines: Line[]) => lines.filter(
  ({ start, end }) => start.x === end.x || start.y === end.y
)

const getSlope = (line: Line) => {
  // Up, down
  if (line.start.x == line.end.x) return {
    x: 0,
    y: line.start.y > line.end.y ? -1 : 1,
  }
  // Side 2 side
  if (line.start.y == line.end.y) return {
    x: line.start.x > line.end.x ? -1 : 1,
    y: 0,
  }
  // All others are at a 45 deg angle
  else {
    return {
      x: line.end.x > line.start.x ? 1 : -1,
      y: line.end.y > line.start.y ? 1 : -1,
    }
  }
}

const applyPoint = (grid, point) => grid[point.y][point.x] += 1

export const applyLine = (grid, line: Line) => {
  const slope = getSlope(line)

  let point = line.start
  while (
    point.x !== line.end.x ||
    point.y !== line.end.y
  ) {
    applyPoint(grid, point)
    point.x += slope.x
    point.y += slope.y
  }

  // Apply the end point
  applyPoint(grid, point)
}

export const getIntersectionPoints = (grid) =>
  sum(...grid.map(row => row.filter(val => val > 1).length))

const partOne = (input: string[]) => {
  // Filter to up/down lines
  const lines = filterUpDown(parseInput(input))
  const grid = getGrid()
  lines.forEach(line => applyLine(grid, line))
  return getIntersectionPoints(grid)
}

export default () => partOne(INPUT)
