import { partOne, partTwo } from '~/days/10'

export default async function handler(req, res) {
  res.status(200).json({
    day: 10,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
