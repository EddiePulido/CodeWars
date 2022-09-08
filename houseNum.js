function houseNumbersSum(inputArray) {
  let sum = 0
  let add = true
  
  inputArray.forEach(n => {
    if(add) sum += n
    if(n === 0) add = false
  })
  
  return sum
}