function nearestSq(n){
  let bigger = n + 1
  let smaller = n - 1
  if(Math.sqrt(n) % 1 === 0) return n
  
  while(true){
    if(Math.sqrt(bigger++) % 1 === 0) return --bigger
    if(Math.sqrt(smaller--) % 1 === 0) return ++smaller
  }
}