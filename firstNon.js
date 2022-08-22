function firstNonRepeated(s) {
  let hash = {}
  let arr = []
  
  for(c of s){
    hash[c] = ++hash[c] || 1
    if(!arr.includes(c)) arr.push(c)
  } 
  
  for(e of arr)
    if(hash[e] === 1)
      return e
  
  return null
}