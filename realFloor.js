function getRealFloor(n) {
  console.log({n})
  return n < 0 ? n : n <= 13 ? Math.max(n - 1, 0) : n - 2
}