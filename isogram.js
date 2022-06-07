function isIsogram(str){
  const s = str.toLowerCase()
  
  result = true
  
  s.split('').forEach(c => {
    if(s.indexOf(c) !== s.lastIndexOf(c)){
      result = false
    }
  })
  
  return result
}