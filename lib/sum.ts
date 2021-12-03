
/**
 * Sum together all the args
 *
 * Example usage:
 *   sum(1, 2, 3) // => 6
 *   sum(...[1, 2, 3]) // => 6
 */
const sum = (...args: number[]) => args.reduce((acc, curr) => acc + curr, 0)

export default sum
