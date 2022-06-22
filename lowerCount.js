function lowercaseCount(str){
  return str.split('').filter(c => c.charCodeAt() >= 97 && c.charCodeAt() <= 122).length
}