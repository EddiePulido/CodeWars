function toCamelCase(str){
  let result = ''
  let sep = ' _-'
  
  for(let i = 0; i < str.length; i++){
    if(sep.includes(str[i])){
      result += str[i+1].toUpperCase()
      i++
    }else{
      result += str[i]
    }
  }
  
  return result
}