const lengthOfSequence = (arr, n) => {
  const count = arr.reduce((a,c) => a + +(c === n), 0)
  const a = arr.indexOf(n)
  const b = arr.lastIndexOf(n)
  return a == b || count > 2 ? 0 : arr.slice((a), b + 1).length
}