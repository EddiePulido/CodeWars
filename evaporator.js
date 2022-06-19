function evaporator(content, evap_per_day, threshold){ 
  let count = 0
  let acceptableAmount = content * (threshold / 100)
  
  while(content >= acceptableAmount){
    count++
    content = content - (content * (evap_per_day / 100) )
  }
  
  return count
}