function compare(s1, s2) {
  let sum1 = 0
  let sum2 = 0
  
  if(!s1) s1 = ''
  if(!s2) s2 = ''
  
  let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  
  for(e of s1){
    if(!a.includes(e.toUpperCase())){
      sum1 = 0
      break
    }
    sum1 += e.toUpperCase().charCodeAt()
  } 
  for(e of s2){
    if(!a.includes(e.toUpperCase())){
      sum2 = 0
      break
    }
    
    sum2 += e.toUpperCase().charCodeAt()
  }
    
  
  return sum1 === sum2
}