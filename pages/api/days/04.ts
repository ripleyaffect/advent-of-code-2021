import { partOne, partTwo } from '~/days/04'

export default async function handler(req, res) {
  res.status(200).json({
    day: 4,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
