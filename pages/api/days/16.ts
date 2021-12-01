import { partOne, partTwo } from '~/days/16'

export default async function handler(req, res) {
  res.status(200).json({
    day: 16,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
