function explode(s) {
  let result = ''
  
  for(let i = 0; i < s.length; i++){
    if(s[i] != '0') result += s[i].repeat(+s[i])
  }
  
  return result
}