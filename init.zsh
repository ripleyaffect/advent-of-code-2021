#!/bin/zsh
rm -R "days"
mkdir "days"
touch "days/index.ts"

rm -R "pages/api/days"
mkdir "pages/api/days"

for i in {1..31}
do
  mkdir "days/${(l:2::0:)i}"

  touch "days/${(l:2::0:)i}/input.ts"
  cat <<EOT >> "days/${(l:2::0:)i}/input.ts"
export default \`
INPUT
GOES
HERE
\`.trim().split('\n')
EOT

  touch "days/${(l:2::0:)i}/part-one.ts"
  cat <<EOT >> "days/${(l:2::0:)i}/part-one.ts"
import INPUT from './input'

const partOne = (input) => null

export default () => partOne(INPUT)
EOT

  touch "days/${(l:2::0:)i}/part-two.ts"
  cat <<EOT >> "days/${(l:2::0:)i}/part-two.ts"
import INPUT from './input'

const partTwo = (input) => null

export default () => partTwo(INPUT)
EOT

  touch "days/${(l:2::0:)i}/index.ts"
  cat <<EOT >> "days/${(l:2::0:)i}/index.ts"
export { default as partOne } from './part-one'
export { default as partTwo } from './part-two'
EOT

  echo "export * as day${(l:2::0:)i} from './${(l:2::0:)i}'" >> "days/index.ts"
done

touch "pages/api/days/[day].ts"
cat <<EOT >> "pages/api/days/[day].ts"
import * as days from '~/days/index'

export default async function handler(req, res) {
  const day = req.query.day
  const paddedDay = day.padStart(2, '0')

  try {
    const { partOne, partTwo } = days[\`day${paddedDay}\`]
    res.status(200).json({
      day: paddedDay,
      partOne: await partOne(),
      partTwo: await partTwo(),
    })
  }
  catch {
    res.status(404).json({ error: \`No day ${paddedDay}\` })
  }
}
EOT
