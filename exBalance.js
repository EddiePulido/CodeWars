function balance(left,right){
  let s1 = 0
  let s2 = 0
  
  const weight = {
    '!' : 2,
    '?' : 3
  }
  
  for(e of left) s1 += weight[e] || 0
  for(e of right) s2 += weight[e] || 0
  
  return s1 > s2 ? 'Left' : s1 < s2 ? 'Right' : 'Balance'
  
}