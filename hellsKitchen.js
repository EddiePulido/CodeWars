function gordon(a){
  const v = 'EIOU'
  
  const words = a.toUpperCase().split(' ')
  
  let result = []
  
  for(w of words){
    let word = ''
    for(c of w){
      if(c === 'A') word += '@'
      else if(v.includes(c)) word += '*'
      else word += c
    }
    
    result.push(word+'!!!!')
  }
  
  return result.join(' ')
}