function isValid(f){
  //coding and coding..
  if(f.includes(1) && f.includes(2)) return false
  if(f.includes(3) && f.includes(4)) return false
  if(f.includes(5) && !f.includes(6)) return false
  if(f.includes(6) && !f.includes(5)) return false
  if(!f.includes(7) && !f.includes(8)) return false
  
  return true
}