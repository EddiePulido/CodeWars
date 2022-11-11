function tripleX(str){
  let first = true
  
  for(let i = 0; i < str.length - 2; i++){
    if(first && str[i] === 'x'){
      first = false
      if(str.slice(i,i + 3) === 'xxx') return true
      
    }else if(str[i] === 'x'){
      return false
    }
  }
  
  return false
}

