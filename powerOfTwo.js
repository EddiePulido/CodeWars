function isPowerOfTwo(n){
  let num = 0
  while(2 ** num <= n){
    if(2 ** num === n) return true
    num++
  }
  
  return false
  
}