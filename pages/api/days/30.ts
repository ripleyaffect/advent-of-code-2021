import { partOne, partTwo } from '~/days/30'

export default async function handler(req, res) {
  res.status(200).json({
    day: 30,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
