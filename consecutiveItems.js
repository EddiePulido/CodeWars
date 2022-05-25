function consecutive(arr, a, b) {
  // Your code here...
  return Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1
}