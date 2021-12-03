import range from './range'
import zip from './zip'

/**
 * Windows `values` into a moving window of size `windowSize`
 * This will result in MAX(N - (windowSize - 1), 0) windows
 *
 * Example usage
 *   window([1, 2, 3, 4], 1) // => [[1], [2], [3], [4]]
 *   window([1, 2, 3, 4], 2) // => [[1, 2], [2, 3], [3, 4]]
 *   window([1, 2, 3, 4], 3) // => [[1, 2, 3], [2, 3, 4]]
 *   window([1, 2, 3, 4], 4) // => [[1, 2, 3, 4]]
 *   window([1, 2, 3, 4], 5) // => []
 */
const window = (values: any[], windowSize: number) => zip(
  ...range(windowSize).map(idx => values.slice(idx))
)

export default window
