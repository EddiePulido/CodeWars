function minimumNumber(numbers){
  let sum = numbers.reduce((a,c) => a + c, 0)
  let n = 0
  
  while(!isPrime(sum)){
    sum++
    n++
  }
  
  return n
  
}

function isPrime(n){
  if(n % 2 === 0) return false
  
  for(let i = 3; i < n/2; i++){
    if(n % i === 0) return false 
  }
  
  return true
}