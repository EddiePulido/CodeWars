function twosDifference(input){
  const set = new Set(input)
  const arr = []
  
  for(n of set){
    if(set.has(n+2)) arr.push([n,n+2])
  }

  return arr 
}