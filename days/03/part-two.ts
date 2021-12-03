import { zip } from '~/lib'

import INPUT from './input'
import {
  Bit,
  bitsToNumber,
  getMostCommonBit,
  getLeastCommonBit,
  parseInput,
} from './part-one'

/**
 * Recursively find the bits for a rating
 */
const findRatingBits = (
  bitArrays: Bit[][],
  getFilterBit: (bits: Bit[]) => Bit,
  bitIndex = 0
): Bit[] => {
  if (bitArrays.length === 1) return bitArrays[0]

  const filterBit = getFilterBit(zip(...bitArrays)[bitIndex])

  return findRatingBits(
    bitArrays.filter(value => value[bitIndex] === filterBit),
    getFilterBit,
    bitIndex + 1
  )
}

// Value Finders

const findOxGenRating = (bitArrays: Bit[][]) =>
  bitsToNumber(findRatingBits(bitArrays, getMostCommonBit))

const findCO2Rating = (bitArrays: Bit[][]) =>
  bitsToNumber(findRatingBits(bitArrays, getLeastCommonBit))

const partTwo = (input: string[]) => {
  const bitArrays = parseInput(input)
  return findOxGenRating(bitArrays) * findCO2Rating(bitArrays)
}

export default () => partTwo(INPUT)
