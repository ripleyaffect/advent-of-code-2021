import { partOne, partTwo } from '~/days/25'

export default async function handler(req, res) {
  res.status(200).json({
    day: 25,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
