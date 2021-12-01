import { partOne, partTwo } from '~/days/03'

export default async function handler(req, res) {
  res.status(200).json({
    day: 3,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
