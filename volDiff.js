function findDifference(a, b) {
  return Math.abs(a.reduce((acc, c) => acc * c, 1) - b.reduce((acc, c) => acc * c, 1))
}