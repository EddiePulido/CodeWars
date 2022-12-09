function findChildren(dancingBrigade) {
  const children = [...dancingBrigade].filter(c => isLow(c)).sort()
  const hash = children.reduce((a,c) => (a[c] = ++a[c] || 1, a), {})
  const parents = [...dancingBrigade].filter(c => !isLow(c)).sort()
  return parents.reduce((a,c) => {
    a += c + c.toLowerCase().repeat(hash[c.toLowerCase()])
    return a
  }, "")  
}

function isLow(c){
  return c === c.toLowerCase()
}