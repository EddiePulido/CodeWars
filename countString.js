function letterCount(s){
  const hash = {}
  
  for(c of s) hash[c] = ++hash[c] || 1
  
  return hash
}