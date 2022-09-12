function stringify(list) {
  let curr = list
  let result = ''
  
  while(curr != null){
    result += curr.data + ' -> '
    curr = curr.next
  }
  
  return result + 'null'
}