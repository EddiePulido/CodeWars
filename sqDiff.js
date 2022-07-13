function differenceOfSquares(n){
  let sumSquare 
  let sum = 0 
  let squareSum = 0
  for(let i = 1; i <= n ; i++){
    sum += i
    squareSum += i ** 2
  }
  
  sumSquare = sum ** 2
  
  return sumSquare - squareSum
}