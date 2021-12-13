import INPUT from './input'
import { parseInput, getCorruptionItem } from './part-one'

const OPENING_ITEM_VALUES = {
  '(': 1,
  '[': 2,
  '{': 3,
  '<': 4,
}

const getFinishingScore = (line: string[]): number => {
  const stack = []
  for (const item of line) {
    if (OPENING_ITEM_VALUES[item]) { stack.push(item) }
    else { stack.pop() }
  }
  return stack.reverse().reduce(
    (acc, curr) => acc * 5 + OPENING_ITEM_VALUES[curr],
    0
  )
}

const partTwo = (input: string[]) => {
  const scores = parseInput(
    input
  ).filter(
    line => !getCorruptionItem(line)
  ).map(
    getFinishingScore
  )
  scores.sort((a, b) => a > b ? 1 : -1)
  return scores[Math.floor(scores.length / 2)]
}

export default () => partTwo(INPUT)
