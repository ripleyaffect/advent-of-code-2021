import { range } from '~/lib'
import INPUT from './input'

type Octopus = {
  x: number,
  y: number,
  value: number,
  flashed: boolean,
}

export const getAdjacent = ({ x, y }: Octopus, rows: Octopus[][]) => rows.reduce(
  (acc, curr) => acc.concat(
    curr.filter(octo =>
      !(octo.x === x && octo.y === y) &&
      Math.abs(octo.x - x) < 2 &&
      Math.abs(octo.y - y) < 2
    )
  ),
  []
)

export const parseInput = (input: string[]) => input.map(
  (line, y) => line.split('').map((value, x) => ({
    x,
    y,
    value: Number(value),
    flashed: false
  }))
)

const digestFlashes = (rows: Octopus[][]) => {
  let flashes = 0
  for (let row of rows) {
    for (let octo of row) {
      if (!octo.flashed && octo.value > 9) {
        flashes++
        octo.flashed = true
        getAdjacent(octo, rows).forEach(ao => {
          if (!ao.flashed) ao.value++
        })
        octo.value = 0
      }
    }
  }
  return flashes === 0 ? flashes : flashes + digestFlashes(rows)
}

export const step = (rows: Octopus[][]) => {
  rows.forEach(row => row.forEach(octo => octo.value++))
  const flashes = digestFlashes(rows)
  // Reset the flashes
  rows.forEach(row => row.forEach(octo => octo.flashed = false))
  return flashes
}

const runSteps = (rows, steps) => {
  return range(steps).reduce(
    (acc, curr) => acc + step(rows),
    0
  )
}

const partOne = (input: string[]) => runSteps(parseInput(input), 100)

export default () => partOne(INPUT)
