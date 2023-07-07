const intersection = (a, b) => {
  const set = new Set(a)
  
  return b.filter(e => set.has(e))
}