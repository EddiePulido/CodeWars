function alphanumeric(string){
  const alphaNum = 'abcdefghijklmnopqrstuvwxyz0123456789'
  if(string.length === 0) return false
  
  return string.split('').every(e => alphaNum.includes(e.toLowerCase()))
}