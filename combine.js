function combine(a,b) {
  console.log(arguments)
  
  const hash ={}
  
  for(let i = 0; i < arguments.length;i++){
    for(k in arguments[i]){
      if(hash[k]){
        hash[k] += arguments[i][k]
      }else{
        hash[k] = arguments[i][k]
      }
    }
  }
  
  return hash
}