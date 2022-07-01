function highestRank(arr){
  const map = {}
  let highest = 0
  let count = 0
  
  arr.forEach(n => {
    map[n] = ++map[n] || 1
  })
  
  for(const [k,v] of Object.entries(map)){
    if(v > count){
      highest = +k
      count = v
    }else if(v === count){
      highest = Math.max(highest, +k)
    }
  }
  
  return highest
}