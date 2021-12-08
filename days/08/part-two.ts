import { permutations } from '~/lib'

import INPUT from './input'

import { parseInput } from './part-one'

const LETTERS = 'abcdefg'.split('')

const INITIAL_VALUES = [
  'abcefg',  // 0
  'cf',      // 1
  'acdeg',   // 2
  'acdfg',   // 3
  'bcdf',    // 4
  'abdfg',   // 5
  'abdefg',  // 6
  'acf',     // 7
  'abcdefg', // 8
  'abcdfg',  // 9
]

const INITIAL_MAPPING = INITIAL_VALUES.reduce(
  (acc, curr, idx) => ({ ...acc, [curr]: idx }),
  {}
)

const translate = (value, solution) =>
  value.split('').map(letter => solution[letter]).sort().join('')

const getSolutionIsValid = (values, solution) => {
  for (const value of values) {
    // Short-circuit at first sign solution is invalid
    if (
      INITIAL_MAPPING[translate(value, solution)] === undefined
    ) return false
  }
  return true
}

// Brute force like a dummy
const solve = (puzzle, solutions) => {
  for (const solution of solutions) {
    const valid = getSolutionIsValid(puzzle.tests, solution)

    // Return the the puzzle outputs as a number when a solution is found
    if (valid) return parseInt(
      puzzle.outputs.map(
        value => INITIAL_MAPPING[translate(value, solution)]
      ).join('')
    )
  }
  return null
}

const partTwo = (input: string[]) => {
  const puzzles = parseInput(input)

  // Calculate all possible solutions up-front
  const solutions = permutations(LETTERS).map(
    permutation => permutation.reduce(
      (acc, curr, idx) => ({ ...acc, [LETTERS[idx]]: curr }),
      {}
    )
  )

  // Sove, add all solutions together
  return puzzles.reduce(
    (acc, curr) => acc + solve(curr, solutions),
    0
  )
}

export default () => partTwo(INPUT)
