function sumTriangularNumbers(n) {
  let sum = 1
  let add = 1
  for(let i = 2; i <= n; i++){
    add += i
    sum += add
  }
  
  return n > 0 ? sum : 0
}