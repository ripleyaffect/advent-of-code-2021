/**
 *
 * @param values Array of values to filter
 * @returns Array of unique values
 */
const unique = (values) => {
  const uniqueValues = []

  for (const value of values) {
    if (!uniqueValues.includes(value))
      uniqueValues.push(value)
  }

  return uniqueValues
}

export default unique
