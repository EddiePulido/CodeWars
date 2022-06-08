function getDivisorsCnt(n){
  let count = 1
  let num = Math.floor(n/2)
  
  while(num != 0){
    if(n % num === 0) count++
    num--
  }
  
  return count
}