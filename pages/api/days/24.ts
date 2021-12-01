import { partOne, partTwo } from '~/days/24'

export default async function handler(req, res) {
  res.status(200).json({
    day: 24,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
