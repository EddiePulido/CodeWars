function sevenAte9(str) {
  let result = ''
  
  for(let i = 0; i < str.length; i++){
    if(i < str.length - 1 && i > 0){
      if(str[i] === '9' && str[i-1] === '7' && str[i+1] === '7'){
        continue
      } else{
        result += str[i]
      }
    }else{
      result += str[i]
    }
  }
  
  return result
}