const zip = (...args: any[]) => {
  const len = Math.min(...args.map(arg => arg.length))
  return args.reduce(
    (acc: any[][], curr: any[]) => {
      acc.length
        ? curr.slice(0, len).forEach((val, idx) => acc[idx].push(val))
        : curr.slice(0, len).forEach((val, idx) => acc.push([val]))
      return acc
    },
    []
  )
}

export default zip
