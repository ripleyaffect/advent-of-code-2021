import { difference, partition, sum, unique, zip } from '~/lib'

import INPUT from './input'

const BOARD_SIZE = 5

type Board = number[][]

// If any row or column on the board has had all its values called,
// the board is completed
const getBoardCompleted = (board: Board, called: number[]): boolean =>
  !!board.filter(rowcol => !difference(rowcol, called).length).length

export const solve = (
  boards,
  callable,
  getIsFinished,
  called = [],
  allSolved = []
) => {
  const [ solved, unsolved ] = partition(
    boards,
    (board) => getBoardCompleted(board, called)
  )

  // End condition
  if (getIsFinished(solved, unsolved)) return [
    [
      ...allSolved,
      ...solved,
    ],
    called
  ]

  // Tail recurse 🐶
  return solve(
    unsolved,
    callable,
    getIsFinished,
    callable.slice(0, called.length + 1),
    [
      ...allSolved,
      ...solved,
    ]
  )
}

const getBoardValues = (board: Board) => unique(board.reduce(
  (acc, curr) => acc.concat(curr),
  []
))

export const getBoardSolution = (board: Board, called) => sum(
  ...difference(getBoardValues(board), called)
) * called[called.length - 1]

// Just the worst
const createBoards = (inputLines: string[]): Board[] => {
  const boards = []

  while (inputLines.length) {
    // Parse the board rows
    const boardRows = inputLines.slice(
      0, BOARD_SIZE
    ).map(
      line => line.trim().split(/\s+/).map(Number)
    )

    // Create the board
    boards.push([ ...boardRows, ...zip(...boardRows) ])

    // Go to the next board
    inputLines = inputLines.slice(BOARD_SIZE + 1)
  }

  return boards
}

export const parseInput = (input: string[]) => ({
  // First line is numbers
  callable: input[0].split(',').map(Number),
  // Rest of the file is boards
  boards: createBoards(input.slice(2))
})

const partOne = (input: string[]) => {
  const { callable, boards } = parseInput(input);

  const [solved, called] = solve(
    boards,
    callable,
    (solved) => !!solved.length // End after first solution found
  )

  return getBoardSolution(solved[0], called)
}

export default () => partOne(INPUT)
