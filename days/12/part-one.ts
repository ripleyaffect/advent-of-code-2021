import { difference, sum } from '~/lib'

import INPUT from './input'

export const parseInput = (input: string[]) => input.reduce(
  (acc, curr) => {
    const [ a, b ] = curr.split('-')
    return {
      ...acc,
      [a]: (acc[a] || []).concat(b),
      [b]: (acc[b] || []).concat(a),
    }
  },
  {}
)

export const findPaths = (
  paths,
  twiceVisited = 'start',
  current = 'start',
  visited = []
) => {
  if (current === 'end') return 1

  const isSmall = current.toLowerCase() === current

  // Support a single small cave visiting twice (part 2)
  twiceVisited = (
    twiceVisited ||
    (isSmall && visited.includes(current)) ? current : twiceVisited
  )

  // Get the visitable caves
  const visitable = !twiceVisited
    ? difference(paths[current], ['start'])
    : difference(paths[current], visited)

  return sum(
    ...visitable.map(
      next => findPaths(
        paths,
        twiceVisited,
        next,
        isSmall ? visited.concat(current) : visited
      )
    )
  )
}

const partOne = (input: string[]) => findPaths(parseInput(input))

export default () => partOne(INPUT)
