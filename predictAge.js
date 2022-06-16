function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  
  let add = 0
  
  for(let i = 0; i < arguments.length; i++){
    add += arguments[i] * arguments[i]
  }
  
  return Math.floor(Math.sqrt(add) / 2)
}