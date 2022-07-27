function remove(s,n){
  
  let result = ''
  
  for(let i = 0; i < s.length; i++){
    if(s[i] === '!' && n) n--
    else result += s[i]
  }
  
  return result
}