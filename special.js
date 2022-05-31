function specialNumber(n){
  const s = '012345'
  const num = n.toString()
  
  for(d of num){
    if(!s.includes(d)) return 'NOT!!'
  }  
  
  return "Special!!"
}