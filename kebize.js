function kebabize(str) {
  let alpha = 'abcdefghkijklmnopqrstuvwxyz'
  alpha = alpha + alpha.toUpperCase()
  
  let result = ''
  
  console.log({str})
  
  for(let i = 0; i < str.length; i++){
    const c = str[i]
    if(alpha.includes(c)){
      if(c === c.toUpperCase() && result.length !== 0){
        result += '-' + c.toLowerCase()
      }else{
        result += c.toLowerCase()
      }
    }
    
  }
    return result
}