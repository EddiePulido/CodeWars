function last(list){
  if(arguments.length === 1){
    if(typeof list === 'number'){
      return list
    }
    return list[list.length - 1]
  }
  
  return arguments[arguments.length - 1]
  
}
