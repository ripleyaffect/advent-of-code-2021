import INPUT from './input'

import { getBoardSolution, parseInput, solve } from './part-one'

const partTwo = (input: string[]) => {
  let { callable, boards } = parseInput(input);

  const [ solved, called ] = solve(
    boards,
    callable,
    (_, unsolved) => !unsolved.length // Finished when all solved
  )

  return getBoardSolution(solved[solved.length - 1], called)
}

export default () => partTwo(INPUT)
