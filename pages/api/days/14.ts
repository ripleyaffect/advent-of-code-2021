import { partOne, partTwo } from '~/days/14'

export default async function handler(req, res) {
  res.status(200).json({
    day: 14,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
