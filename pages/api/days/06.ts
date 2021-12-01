import { partOne, partTwo } from '~/days/06'

export default async function handler(req, res) {
  res.status(200).json({
    day: 6,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
