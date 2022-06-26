function solve(arr) {
  arr = new Array(...new Set(arr.reverse()))
  arr.reverse()
  return arr
}