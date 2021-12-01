import { partOne, partTwo } from '~/days/23'

export default async function handler(req, res) {
  res.status(200).json({
    day: 23,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
