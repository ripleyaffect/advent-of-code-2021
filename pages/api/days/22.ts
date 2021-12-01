import { partOne, partTwo } from '~/days/22'

export default async function handler(req, res) {
  res.status(200).json({
    day: 22,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
