import { partOne, partTwo } from '~/days/21'

export default async function handler(req, res) {
  res.status(200).json({
    day: 21,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
