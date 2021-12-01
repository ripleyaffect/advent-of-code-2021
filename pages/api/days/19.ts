import { partOne, partTwo } from '~/days/19'

export default async function handler(req, res) {
  res.status(200).json({
    day: 19,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
