import * as days from '~/days'

const getMessage = (partOneAnswer, partTwoAnswer, dayRaw, dayInt) => {
  if (dayInt !== parseInt(dayRaw, 10))
    return 'Yeah, hex days are supported!'
  if (partOneAnswer && !partTwoAnswer)
    return 'Keep at it!'
  else if (!partOneAnswer && partTwoAnswer)
    return 'Working on part two first, huh?'

  return 'Start when you can, finish when you can'
}

export default async function handler(req, res) {
  const dayRaw = req.query.day
  const dayInt = parseInt(dayRaw)

  if (isNaN(dayInt)) {
    return res.status(400).json({
      message: 'Day must be an integer'
    })
  }
  else if (dayInt < 1 || dayInt > 25) {
    return res.status(400).json({
      message: 'The days start at 1 and end at 25',
    })
  }
  else if (dayInt !== Number(dayRaw)) {
    return res.status(400).json({
      message: 'Sorry, partial days not supported'
    })
  }

  const dayString = dayInt.toString().padStart(2, '0')

  let partOne, partTwo

  try {
    partOne = days[`day${dayString}`].partOne
    partTwo = days[`day${dayString}`].partTwo
  }
  catch {
    return res.status(404).json({
      message: `No exports found for day ${dayInt}`
    })
  }

  const partOneAnswer = await partOne()
  const partTwoAnswer = await partTwo()

  res.status(200).json({
    day: dayInt,
    partOne: partOneAnswer,
    partTwo: partTwoAnswer,
    message: getMessage(partOneAnswer, partTwoAnswer, dayRaw, dayInt)
  })
}
