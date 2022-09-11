function elevatorDistance(array) {
  let result = 0
  
  for(let i = 0; i < array.length - 1; i++){
    result += Math.abs(array[i] - array[i+1])
  }
  
  return result
}