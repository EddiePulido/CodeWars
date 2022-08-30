function isIsogram(str) {
  const hash = {}
  
  for(c of str.toLowerCase()){
    if(hash[c]) return false
    hash[c] = 1
  }
  
  return true
}

console.log(isIsogram('moOse'));