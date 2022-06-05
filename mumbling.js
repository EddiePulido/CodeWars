function accum(s) {
  
  let result = ''
  
  for(let i = 0; i < s.length; i++){
    const n = i + 1
    let l = s[i].toLowerCase()
    for(let j = 0; j < n; j++){
      if(j === 0){
        result += l.toUpperCase()
      }else{
        result += l
      }
    }
    result += '-'
  }
  
  return result.slice(0,result.length-1)
}