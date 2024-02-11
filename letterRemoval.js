function solve(s, k){
  const map = [...s].reduce((a,c) => (a[c] = ++a[c] || 1, a), {})
  let i = 0
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  
  while(k && s.length){
    while(!map[alpha[i]]) i++
    
    s = s.replace(alpha[i], '')
    map[alpha[i]]--
    k--
  }
  
  return s
}