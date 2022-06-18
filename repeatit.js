var repeatIt = function(str, n) {
  if(typeof str !== 'string') return 'Not a string'
  let s = ''
  for(let i = 0; i < n; i++){
    s += str
  }
  
  return s
}