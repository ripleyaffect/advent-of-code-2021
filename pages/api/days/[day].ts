import * as days from '~/days'

export default async function handler(req, res) {
  const day = parseInt(req.query.day).toString()
  const paddedDay = day.padStart(2, '0')

  try {
    const { partOne, partTwo } = days[`day${paddedDay}`]
    res.status(200).json({
      day: paddedDay,
      partOne: await partOne(),
      partTwo: await partTwo(),
    })
  }
  catch {
    res.status(404).json({ error: `No day ${day}` })
  }
}
