function noRepeat(str) {  
  const hash = [...str].reduce((a,c) => (a[c] = ++a[c] || 1, a), {})
  return [...str].find(e => hash[e] === 1)
}