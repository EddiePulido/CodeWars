function fiveLine(s){
  //coding here...
  s = s.trim()
  let str = s
  let result = []
  
  for(let i = 0; i < 5; i++){
    result.push(str)
    str += s
  } 
  
  return result.join('\n')
}