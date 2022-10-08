function hasUniqueChars(str){
  const hash = {}
  let hasUnique = true
  
  for(c of str) hash[c] ? hasUnique = false : hash[c] = 1
    
  return hasUnique
}