function sumNoDuplicates(nums) {
  const count = nums.reduce((a,c) => (a[c] = ++a[c] || 1, a), {})
  
  return nums.filter(e => count[e] === 1).reduce((a,c) => a + c, 0)
}