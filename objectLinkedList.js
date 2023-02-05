function listToArray(list) {
  let runner = list
  const arr = []
  
  while(runner){
    arr.push(runner.value)
    runner = runner.next
  }
  
  return arr
}