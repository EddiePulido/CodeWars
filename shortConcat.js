function shorter_reverse_longer(a,b){
  let longer
  let shorter
  
  if(a.length >= b.length){
    longer = a
    shorter = b
  }else{
    longer = b
    shorter = a
  }
  longer = longer.split('').reverse().join('')
  
  return shorter + longer + shorter
  
}