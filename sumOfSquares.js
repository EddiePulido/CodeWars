const getNumberOfSquares = n => {
  const arr = []
  for(let i = 1; i <= n; i++){
    const pow = i ** 2
    if(pow < n) arr.push(pow)
  }
  
  let sum = 0
  let count = 0
  
  while(sum < n){
    sum += arr[count]
    count++
  }
  
  return count-1
}