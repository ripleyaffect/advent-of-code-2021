import INPUT from './input'

export type Point = {
  x: number
  y: number
}

type Fold = {
  dir: 'x' | 'y',
  value: number
}

export const parseInput = (
  input: string[]
): {
  points: Point[],
  folds: Fold[]
} => {
  const divideIndex = input.indexOf('')
  return {
    points: input.slice(0, divideIndex).map(
      line => line.split(',').map(Number)
    ).map(
      ([ x, y ]) => ({ x, y }) as Point
    ),
    folds: input.slice(divideIndex + 1).map(
      line => line.replace('fold along ', '').split('=')
    ).map(
      ([ dir, value ]) => ({ dir, value: Number(value) }) as Fold
    )
  }
}

export const getPointInPoints = (
  points: Point[],
  { x, y }: Point
) => points.filter(
  p => p.x === x && p.y === y
).length > 0

export const doFold = (
  points: Point[],
  { dir, value }: Fold
): Point[] => points.map(
  point => point[dir] > value
    ? { ...point, [dir]: value - (point[dir] - value) }
    : point
).reduce(
  (acc, curr) => getPointInPoints(acc, curr) ? acc : acc.concat(curr),
  []
)

const partOne = (input: string[]) => {
  const { points, folds } = parseInput(input)
  return doFold(points, folds[0]).length
}

export default () => partOne(INPUT)
