function sumPairs(ints, s) {
  const obj = {}
  
  for(let i = 0; i < ints.length; i++){
    const other = s - ints[i]
    const n = ints[i]
    if(obj[n] !== undefined){
      return [obj[n], n] 
    } else{
      obj[other] = n
    }
  }
  
  return undefined ;
}