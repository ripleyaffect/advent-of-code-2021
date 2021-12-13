import INPUT from './input'
import { findPaths, parseInput } from './part-one'

const partTwo = (input: string[]) => findPaths(parseInput(input), null)

export default () => partTwo(INPUT)
