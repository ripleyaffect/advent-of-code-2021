import { sum } from '~/lib'

import INPUT from './input'
import { getIncreasingCount } from './part-one'

const getWindowSums = (readings) => readings.reduce(
  ({ index, sums, window }, curr) => {
    // Get the current window
    // Until the fourth entry, don't slice entries out
    window = index < 3 ? window.concat(curr) : window.slice(1).concat(curr)

    return {
      // Pass next its own index
      index: index + 1,
      // Add current window sum to the list if window is full
      sums: index < 2 ? sums : sums.concat(sum(...window)),
      // Pass next the current window
      window,
    }
  },
  {
    index: 0,
    sums: [],
    window: [],
  }
).sums // We just want the sums

const partTwo = (input: string[]) => getIncreasingCount(
  getWindowSums(input.map(Number))
)

export default () => partTwo(INPUT)
