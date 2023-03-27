function isPrime(num) {
  if(num < 2) return false
  
  for(let i = 2; i <= Math.sqrt(num); i++){
    if(!(num % i)) return false
  }
  
  retu