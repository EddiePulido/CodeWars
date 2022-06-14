function findMultiples(integer, limit) {
  //your code here
  const arr = []
  const base = integer
  
  while(integer <= limit){
    arr.push(integer)
    integer += base
  }
  
  return arr
}

