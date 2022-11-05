function duplicateCount(text){
  const hash = text.toLowerCase().split('').reduce((a,c) => (a[c] = ++a[c] || 1, a), {})
  return Object.values(hash).reduce((a,c) => c > 1 ? a + 1 : a, 0)
}
  