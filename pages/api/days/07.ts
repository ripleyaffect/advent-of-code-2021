import { partOne, partTwo } from '~/days/07'

export default async function handler(req, res) {
  res.status(200).json({
    day: 7,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
