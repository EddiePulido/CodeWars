function longest(s1, s2) {
  let one = new Set((s1 + s2).split(''))
  const arr = []
  
  one.forEach(char => arr.push(char))
  
  return arr.sort().join('')
}