function alphabet(arr) {
  const max = Math.max(...arr)
  const factors = new Set()  
  const sortedSet = ([...(new Set(arr))].sort((a,b) => a - b))

  for(num of sortedSet){
    if(factors.has(num)) return num
    if(max % num === 0) factors.add(max/num)    
  }
  
}