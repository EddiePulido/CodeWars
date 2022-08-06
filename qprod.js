function product (string) {
  let q = 0
  let e = 0
  
  for(c of string){
    if(c === '?') q++
    if(c === '!') e++
  }
  
  return q * e
}