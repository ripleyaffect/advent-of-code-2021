import { partOne, partTwo } from '~/days/17'

export default async function handler(req, res) {
  res.status(200).json({
    day: 17,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
