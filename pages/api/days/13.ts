import { partOne, partTwo } from '~/days/13'

export default async function handler(req, res) {
  res.status(200).json({
    day: 13,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
