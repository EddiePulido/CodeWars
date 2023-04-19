function findHack(arr) {
  const points = {
    A : 30,
    B : 20,
    C : 10,
    D : 5
  }
  return arr.filter(e => {
    if(e[1] > 200) return true
    let score = e[2].reduce((a,c) => a + (points[c] || 0), 0)
    const ab = e[2].reduce((a,c) => c === 'A' || c === 'B' ? ++a : a, 0)
    if(ab === e[2].length && ab > 4) score += 20
    
    return score !== e[1]
  }).map(e => e[0])
}