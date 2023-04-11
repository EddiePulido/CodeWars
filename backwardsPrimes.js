function backwardsPrime(start, stop){
  const arr = []
  const revNum = n =>+n.toString().split('').reverse().join('')
  
  for(let i = start; i <= stop; i++){
    const rev = revNum(i)

    if(rev !== i && isPrime(i) && isPrime(rev)) arr.push(i)
  }
  
  return arr
}

function isPrime(n){
  if(n < 2) return false
  
  for(let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0) return false
  }
  
  return true
}