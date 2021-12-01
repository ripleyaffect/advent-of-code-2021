import { partOne, partTwo } from '~/days/02'

export default async function handler(req, res) {
  res.status(200).json({
    day: 2,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
