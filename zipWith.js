function zipWith(fn,a1,a2) {
  const min = Math.min(a1.length, a2.length)
  const arr = []
  
  for(let i = 0; i < min; i++) arr.push(fn(a1[i], a2[i]))
  
  return arr
} 