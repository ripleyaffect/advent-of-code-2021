import { sum, window } from '~/lib'

import INPUT from './input'
import { getIncreasingCount } from './part-one'

const partTwo = (input: string[]) => getIncreasingCount(
  window(input.map(Number), 3).map(window => sum(...window))
)

export default () => partTwo(INPUT)
