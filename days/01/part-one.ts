import INPUT from './input'

export const getIncreasingCount = (readings) => readings.reduce(
  ({ acc, prev }, curr) => ({
    // Add one if current is larger than the previous
    acc: acc + (prev && curr > prev ? 1 : 0),
    // Set the previous to current
    prev: curr,
  }),
  {
    acc: 0,
    prev: null,
  }).acc

const partOne = (input: string[]) => getIncreasingCount(input.map(Number))

export default () => partOne(INPUT)
