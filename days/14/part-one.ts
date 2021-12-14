import { range, window } from '~/lib'

import INPUT from './input'

export const parseInput = (input: string[]) => ({
  template: input[0],
  letterIncreaseMap: input.slice(2).reduce(
    (acc, curr) => {
      const [ start, insert ] = curr.split(' -> ')
      return { ...acc, [start]: insert }
    },
    {}
  )
})

const doStep = (
  letterCounts,
  letterIncreaseMap,
  substringCounts,
  substringIncreaseMap
) => {
  // Find the substring counts for the next step
  const newSubstringCounts = {}
  for (const key of Object.keys(substringCounts)) {
    for (const substring of substringIncreaseMap[key]) {
      newSubstringCounts[substring] = (
        (newSubstringCounts[substring] || 0) +
        substringCounts[key]
      )
    }
  }

  // Find the letter counts for the next step
  for (const substring of Object.keys(substringCounts)) {
    const letter = letterIncreaseMap[substring]
    letterCounts[letter] = (
      (letterCounts[letter] || 0) +
      substringCounts[substring]
    )
  }

  return {
    letterCounts,
    substringCounts: newSubstringCounts,
  }
}

const doSteps = (
  originalLetterCounts,
  letterIncreaseMap,
  originalSubstringCounts,
  substringIncreaseMap,
  steps,
) => range(steps).reduce(
  ({ letterCounts, substringCounts }, _) => doStep(
    letterCounts,
    letterIncreaseMap,
    substringCounts,
    substringIncreaseMap
  ),
  {
    letterCounts: originalLetterCounts,
    substringCounts: originalSubstringCounts,
  }
)

export const solve = (template, letterIncreaseMap, steps) => {
  // Get the initial letter counts
  const letterCounts = template.split('').reduce(
    (acc, curr) => ({ ...acc, [curr]: (acc[curr] || 0) + 1 }),
    {}
  )

  // Get the initial substring counts
  const substringCounts = window(
    template.split(''), 2).map(win => win.join('')
  ).reduce(
    (acc, curr) => ({ ...acc, [curr]: (acc[curr] || 0) + 1 }),
    {}
  )

  // Get the mapping from substring -> substrings created
  const substringIncreaseMap = Object.keys(letterIncreaseMap).reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: [
        curr[0] + letterIncreaseMap[curr],
        letterIncreaseMap[curr] + curr[1]
      ]
    }),
    {}
  )

  const finalLetterCounts = doSteps(
    letterCounts,
    letterIncreaseMap,
    substringCounts,
    substringIncreaseMap,
    steps
  ).letterCounts

  return (
    Math.max(...Object.values(finalLetterCounts) as number[]) -
    Math.min(...Object.values(finalLetterCounts) as number[])
  )
}

const partOne = (input: string[]) => {
  const { template, letterIncreaseMap } = parseInput(input)
  return solve(template, letterIncreaseMap, 10)
}

export default () => partOne(INPUT)
