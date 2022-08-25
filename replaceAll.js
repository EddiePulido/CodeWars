function replaceAll(input, find, replace) {
  if(!input && !find) return replace;
  
  if(!find) return replace + input.split('').join(replace) + replace
  
  let str = ''
  
  for(let i = 0; i < input.length; i++){
    if(input.slice(i, i + find.length) === find){
      str+= replace
      i += find.length - 1
    }else{
      str += input[i]
    }
  }
  
  return str
}