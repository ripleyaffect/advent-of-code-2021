import { partOne, partTwo } from '~/days/01'

export default async function handler(req, res) {
  res.status(200).json({
    day: 1,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
