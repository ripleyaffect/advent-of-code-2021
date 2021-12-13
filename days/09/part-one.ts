import INPUT from './input'

export type Point = {
  x: number,
  y: number,
  value: number,
  visited: boolean
}

export const getAdjacentPoints = ({ x, y }: Point, rows: Point[][]) => rows.reduce(
  (acc, curr) => acc.concat(
    curr.filter(point =>
      ((Math.abs(point.x - x) === 1 && point.y - y === 0)) ||
      ((Math.abs(point.y - y) === 1 && point.x - x === 0))
    )
  ),
  []
)

export const parseInput = (input: string[]) => input.map(
  (line, y) => line.split('').map(
    (value, x) => ({
      x,
      y,
      value: Number(value),
      visited: false
    })
  )
)

const getLowPoints = (rows: Point[][]) => rows.reduce(
  (acc, row) => acc.concat(
    row.filter(
      point => !getAdjacentPoints(point, rows).filter(
        ap => ap.value <= point.value
      ).length
    )
  ),
  []
)

const partOne = (input: string[]) => {
  const rows = parseInput(input)
  return getLowPoints(rows).reduce(
    (acc, curr) => acc + curr.value + 1,
    0
  )
}

export default () => partOne(INPUT)
