import INPUT from './input'

export type Instruction = {
  dir: 'down' | 'up' | 'forward',
  mag: number,
}

export type Mag = {
  x: number,
  y: number,
}

export const parseInstructions = (input: string[]): Instruction[] => input.map(
  instruction => {
    const [dir, mag] = instruction.split(' ')
    return { dir, mag: Number(mag) } as Instruction
  }
)

const ingestInstructions = (
  instructions: Instruction[]
): Mag => instructions.reduce(
  ({ x, y }, { dir, mag }) => {
    switch (dir) {
      case 'down':
        return { x, y: y - mag }
      case 'up':
        return { x, y: y + mag }
      case 'forward':
        return { x: x + mag, y }
    }
  },
  { x: 0, y: 0 }
)

export const getMagValue = ({ x, y }: Mag): number => Math.abs(x * y)

const partOne = (input: string[]) => getMagValue(
  ingestInstructions(
    parseInstructions(input)
  )
)

export default () => partOne(INPUT)
