const maximumCount = nums => {
  const pos = nums.reduce((a,c) => c > 0 ? ++a : a, 0)
  const neg = nums.reduce((a,c) => c < 0 ? ++a : a, 0)

  return Math.max(pos, neg)
}