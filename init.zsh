#!/bin/zsh
rm -R "days"
mkdir "days"

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

  touch "pages/api/days/${(l:2::0:)i}.ts"
  cat <<EOT >> "pages/api/days/${(l:2::0:)i}.ts"
import { partOne, partTwo } from '~/days/${(l:2::0:)i}'

export default async function handler(req, res) {
  res.status(200).json({
    day: ${i},
    partOne: await partOne(),
    partTwo: await partTwo(),
  })
}
EOT
done
