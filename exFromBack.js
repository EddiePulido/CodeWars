function remove (string) {  
  let arr = string.split('')
  
  while(arr.slice(-1)[0] === '!') arr.pop()
  
  return arr.join('')
}