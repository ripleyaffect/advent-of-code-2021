import INPUT from './input'
import { Instruction, Mag, getMagValue, parseInstructions } from './part-one'

type Mag2 = Mag & { aim: number }

const ingestInstructions = (
  instructions: Instruction[]
): Mag2 => instructions.reduce(
  ({ aim, x, y }, { dir, mag }) => {
    switch (dir) {
      case 'down':
        return { aim: aim + mag, x, y }
      case 'up':
        return { aim: aim - mag, x, y }
      case 'forward':
        return { aim, x: x + mag, y: y + (mag * aim) }
    }
  },
  { aim: 0, x: 0, y: 0 }
)

const partTwo = (input: string[]) => getMagValue(
  ingestInstructions(
    parseInstructions(input)
  )
)

export default () => partTwo(INPUT)
