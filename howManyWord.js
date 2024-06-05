const testit= s => {
  let w = 'word'
  let count = 0
  let j = 0
  
  for(const c of s.toLowerCase()){

    if(c === w[j]){
      j++
    }
    
    if(j === 4){
      count++
      j = 0
    }
    
  }
  
  return count
}