# Advent of Code - 2021

This is a [Next.js](https://nextjs.org/) project, written in TypeScript

## Setting up

```
npm install
```

## Running the app

```
npm run dev
```

## Solutions

Solutions are written in the directory of the corresponding day in the root
`days` directory . For each day, input should be copied into `input.ts` and
will be accessible in the exported constant as an array, where each item is
equal to a line in the original input. The exported functions from
`part-one.ts` and `part-two.ts` should give the solutions for the first and
second part of the day, respectively.

The directory structure looks like this:

```
days
  01
    index.ts      -- Exports "part" functions
    input.ts      -- Input copied into here
    part-one.ts   -- Default export is function giving solution for part one
    part-two.ts   -- Default export is function giving solution for part two
  02
  03
  ...
  25
```

For a particular day's solution, you can visit

```
localhost:3000/api/days/[DAY]
```

while the server is running to get the results of the functions for each part.

## `lib`

A `lib` directory is present at the root, so useful functions or
code shared between days can be kept there. `lib` is aliased as `~/lib`,
so you can import things from it easily:gs

```ts
import { sum } from '~/lib'; // `sum` is exported through lib/index.ts
// or
import sum from '~/lib/sum';
```
