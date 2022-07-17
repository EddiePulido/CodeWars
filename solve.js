function solve(s){
  const v = 'aeiou'
  
  let max_len = 0
  
  const hash = {}
  
  let chars = new Set([...s])
  
  for(c of [...s]) hash[c] = hash[c]++ || 1
  
  console.log('hash', hash)
  
  return Array(...chars).map(c => [c, hash[c]])
  
}