import { partOne, partTwo } from '~/days/26'

export default async function handler(req, res) {
  res.status(200).json({
    day: 26,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
