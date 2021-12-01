import { partOne, partTwo } from '~/days/28'

export default async function handler(req, res) {
  res.status(200).json({
    day: 28,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
