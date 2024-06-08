function onlyDuplicates(str) {
  const count = [...str].reduce((a,c) => (a[c] = ++a[c] || 1, a), {})
  
  return [...str].filter(e => count[e] !== 1).join('')
}