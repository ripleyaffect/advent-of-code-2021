import INPUT from './input'

export const parseInput = (input: string[]) => input.map(
  line => {
    const [ testsRaw, outputsRaw ] = line.split(' | ')
    return {
      tests: testsRaw.split(' ').map(val => val.split('').sort().join('')),
      outputs: outputsRaw.split(' ').map(val => val.split('').sort().join('')),
    }
  }
)

const LENGTHS_TO_COUNT = [ 2, 3, 4, 7 ]

const partOne = (input: string[]) => parseInput(input).reduce(
  (acc, { outputs }) => acc + outputs.filter(
    (output: string) => LENGTHS_TO_COUNT.includes(output.length)
  ).length,
  0
)

export default () => partOne(INPUT)
