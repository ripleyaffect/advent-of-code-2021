import { partOne, partTwo } from '~/days/20'

export default async function handler(req, res) {
  res.status(200).json({
    day: 20,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
