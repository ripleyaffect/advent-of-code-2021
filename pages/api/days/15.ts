import { partOne, partTwo } from '~/days/15'

export default async function handler(req, res) {
  res.status(200).json({
    day: 15,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
