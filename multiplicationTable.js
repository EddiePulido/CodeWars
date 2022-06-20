multiplicationTable = function(size) {
  let arr = []
  
  for(let i = 1; i <= size; i++){
    let a = []
    for(let j = 1; j <= size; j++){
      a.push(i * j)
    }
    arr.push(a)
  }
  
  return arr
}
