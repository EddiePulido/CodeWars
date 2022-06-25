function isAllPossibilities(x){
  console.log({x})
  x.sort((a,b) => a - b)
  if(x.length === 0) return false
  
  for(let i= 0; i < x.length; i++){
    if(i != x[i]) return false
  }
  
  return true

}