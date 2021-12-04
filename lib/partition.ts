/**
 * Partition the passed array into parts, based on a partitioner function
 *
 * @param values Array of values to partition
 * @param partitioner function to partition each value
 * @returns Array with truthy values first and falsey values second
 */
const partition = (values: any[], partitioner: (value: any) => boolean) => [
  values.filter(partitioner),
  values.filter((value) => !partitioner(value))
]

export default partition
