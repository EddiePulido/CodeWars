const lengthOfSequence = (arr, n) => {
  const a = arr.indexOf(n)
  const b = arr.lastIndexOf(n)
  return a == b ? 0 : arr.slice((a), b + 1).length
}