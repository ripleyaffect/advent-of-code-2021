import { partOne, partTwo } from '~/days/05'

export default async function handler(req, res) {
  res.status(200).json({
    day: 5,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
