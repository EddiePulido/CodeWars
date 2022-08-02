function multiples(m, n){
  const arr = []
  let sum = n
  while(m){
    arr.push(sum)
    sum += n
    m--
  }
  
  return arr
}