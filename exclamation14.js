function convert(s){
  let num = ''
  let currCount = 0
  let curr = s[0]
  
  for(let i = 0; i <= s.length; i++){
    if(curr != s[i]){
      num += currCount
      currCount = 0;
      curr = s[i]
    }
      currCount++

  }
  
  num = +num

  while(!isPrime(num)){
    for(let i = 2; i <= Math.sqrt(+num); i++){
      if(num % i === 0){
        num /= i
        break
      }
    }
  }
  
  return num
}

function isPrime(n){
  if(n < 2) return false
  
  for(let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0) return false
  }
  
  return true
}