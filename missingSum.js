const solve = arr => {
  arr.sort((a, b) => a - b)
  let sum = 1

  for (let i = 0; i < arr.length && arr[i] <= sum; i++) {
      sum += arr[i]
  }

  return sum
}
