function computeDepth (x){
  const hash = {}
  const arr = []
  let mult = 1
  
  while(arr.length != 10){
    let str = (x * mult++).toString()
    for(n of str){
      if(!(n in hash)){
        hash[n] = true
        arr.push(n)
      }
      
    }
  }
  
  return mult - 1
}