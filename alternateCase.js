function alternateCase(s) {
  let str = ''
  s.split('').forEach(c => {
    if(c.toLowerCase() === c){
      str += c.toUpperCase()
    }else{
      str += c.toLowerCase()
    }
  })
  
  return str
}