function binaryToString(binary) {
  
  let str = ''
  
  for(let i = 0; i < binary.length; i += 8){
    str += String.fromCharCode(parseInt(binary.slice(i,i+8), 2))
  }
  
  return str
}