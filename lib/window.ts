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
export default (
  values: any[],
  windowSize = 3
) => values.reduce(
  ({ index, window, windows }, curr) => {
    // Get the current window
    // Don't slice out value until the index is >= windowSize
    window = index < windowSize
      ? window.concat(curr)
      : window.slice(1).concat(curr)

    return {
      // Pass next its own index
      index: index + 1,
      // Pass next the current window
      window,
      // Add this window to windows if window is full
      windows: index < windowSize - 1 ? windows : windows.concat([window])
    }
  },
  {
    index: 0,
    window: [],
    windows: [],
  }
).windows
