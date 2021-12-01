import { partOne, partTwo } from '~/days/18'

export default async function handler(req, res) {
  res.status(200).json({
    day: 18,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
