function ascendDescend(length, minimum, maximum) {
  if(minimum > maximum) return ''
  if(minimum === maximum){
    return minimum.toString().repeat(length)
  }
  let min = minimum
  let str = ''
  let goUp = true;
  
  for(let i = 0; i < length; i++){
    str+= min
    if(goUp){
      min++
      if(min === maximum){
        goUp = false;
      }
    }else{
      min--
      if(min === minimum){
        goUp = true;
      }
    }
  }
  
  return str.slice(0,length)
}
