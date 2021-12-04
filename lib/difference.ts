/**
 * Return the first Array minus the second
 */
const difference = (arr1, arr2) => arr1.filter(val => !arr2.includes(val))

export default difference
