function twiceAsOld(dad, son) {
  let count = 0
  
  if(son > dad /2){
    while(dad != son * 2){
      count++
      dad--
      son--
    }
  }else{
    while(dad != son * 2){
      count++
      dad++
      son++
    }
    
  }
  
  
  return count
}