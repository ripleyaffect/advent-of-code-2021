import { partOne, partTwo } from '~/days/09'

export default async function handler(req, res) {
  res.status(200).json({
    day: 9,
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
