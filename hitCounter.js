function counterEffect(hitCount) {
  const makeArr = n => {
    const arr = []
    
    for(let i = 0; i <= n; i++) arr.push(i)
    
    return arr
  }
  
  return [...hitCount].reduce((a,c) => (a.push(makeArr(+c)),a), [])
}