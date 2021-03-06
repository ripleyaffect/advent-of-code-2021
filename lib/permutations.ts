const permutations = (values) => {
  var results = []

  function permute(arr, memo = []) {
    let cur

    for (let i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);

      if (arr.length === 0) {
        results.push(memo.concat(cur))
      }

      permute(arr.slice(), memo.concat(cur))

      arr.splice(i, 0, cur[0])
    }

    return results;
  }

  return permute(values);
}

export default permutations
