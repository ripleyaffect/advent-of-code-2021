import { partOne, partTwo } from '~/days/11'

export default async function handler(req, res) {
  res.status(200).json({
    day: 11,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
