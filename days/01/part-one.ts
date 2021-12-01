import { sum } from '~/lib'

import INPUT from './input'

const partOne = (input) => sum(...input.map(Number))

export default () => partOne(INPUT)
