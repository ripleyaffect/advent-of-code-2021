import { partOne, partTwo } from '~/days/31'

export default async function handler(req, res) {
  res.status(200).json({
    day: 31,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
