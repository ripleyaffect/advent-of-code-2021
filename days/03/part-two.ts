import { zip } from '~/lib'

import INPUT from './input'
import {
  Bit,
  bitsToNumber,
  getMostCommonBit,
  getLeastCommonBit,
  parseInput,
} from './part-one'

const findRating = (
  bitArrays: Bit[][],
  getFilterBit: (bits: Bit[]) => Bit,
  bitIndex = 0
): Bit[] => {
  if (bitArrays.length === 1) return bitArrays[0]

  const filterBit = getFilterBit(zip(...bitArrays)[bitIndex])

  return findRating(
    bitArrays.filter(value => value[bitIndex] === filterBit),
    getFilterBit,
    bitIndex + 1
  )
}

// Value Finders

const findOxGenRating = (bitArrays: Bit[][]) =>
  bitsToNumber(findRating(bitArrays, getMostCommonBit))

const findCO2Rating = (bitArrays: Bit[][]) =>
  bitsToNumber(findRating(bitArrays, getLeastCommonBit))

const partTwo = (input: string[]) => {
  const bitArrays = parseInput(input)
  return findOxGenRating(bitArrays) * findCO2Rating(bitArrays)
}

export default () => partTwo(INPUT)
