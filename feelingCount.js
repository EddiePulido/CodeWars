function countFeelings(str, arr) {
  const set = new Set(str)
  
  const result = arr.reduce((a,c) => {
    return a + +[...c].every(e => set.has(e))
  }, 0)
  
  return result + ' feeling' + (result === 1 ? '.' : 's.')
}