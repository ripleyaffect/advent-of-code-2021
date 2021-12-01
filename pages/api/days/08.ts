import { partOne, partTwo } from '~/days/08'

export default async function handler(req, res) {
  res.status(200).json({
    day: 8,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
