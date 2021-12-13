import { sum } from '~/lib'

import INPUT from './input'

const CLOSE_TO_OPEN = {
  ')': '(',
  ']': '[',
  '}': '{',
  '>': '<',
}

const CORRUPTION_ITEM_VALUES = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
}

const getCorruptionValue = (item: string) => CORRUPTION_ITEM_VALUES[item]

export const getCorruptionItem = (line: string[]) => {
  const stack = []
  for (const value of line) {
    if (CLOSE_TO_OPEN[value]) {
      const top = stack.pop()
      if (top !== CLOSE_TO_OPEN[value]) {
        return value
      }
    }
    else {
      stack.push(value)
    }
  }
  return null
}

export const parseInput = (input: string[]) => input.map(
  line => line.split('')
)

const partOne = (input: string[]) => sum(
  ...parseInput(input).map(
    getCorruptionItem
  ).filter(
    Boolean
  ).map(
    getCorruptionValue
  )
)

export default () => partOne(INPUT)
