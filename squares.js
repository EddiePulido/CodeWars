function squares(x, n) {
  if(n <= 0) return []
  
  const arr = [x]
  
  for(let i = 0; i < n-1; i++){
    x = x ** 2
    arr.push(x)
  }
  
  return arr
}