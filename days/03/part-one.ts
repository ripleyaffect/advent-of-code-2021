import { zip } from '~/lib'

import INPUT from './input'

export type Bit = 0 | 1

export const parseInput = input => input.map(line => line.split('').map(Number))

export const getMostCommonBit = (bits: Bit[]): Bit =>
  bits.filter(Boolean).length >= (bits.length / 2) ? 1 : 0

export const getLeastCommonBit = (bits: Bit[]): Bit =>
  getMostCommonBit(bits) ? 0 : 1

export const bitsToNumber = (bits: Bit[]): number => parseInt(bits.join(''), 2)

// Value Finders

const getGamma = (bitArrays: Bit[][]) =>
  bitsToNumber(bitArrays.map(getMostCommonBit))

const getEpsilon = (bitArrays: Bit[][]) =>
  bitsToNumber(bitArrays.map(getLeastCommonBit))

const partOne = (input: string[]) => {
  const zippedBitArrays = zip(...parseInput(input))
  return getGamma(zippedBitArrays) * getEpsilon(zippedBitArrays)
}

export default () => partOne(INPUT)
