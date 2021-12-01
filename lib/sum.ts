
/**
 * Sum together all the args
 *
 * Example usage:
 *   sum(1, 2, 3) // => 6
 *   sum(...[1, 2, 3]) // => 6
 */
export default (...args) => args.reduce((acc, curr) => acc + curr, 0)
