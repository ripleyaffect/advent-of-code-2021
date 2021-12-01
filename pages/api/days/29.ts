import { partOne, partTwo } from '~/days/29'

export default async function handler(req, res) {
  res.status(200).json({
    day: 29,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
