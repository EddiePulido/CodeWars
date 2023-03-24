const catchSignChange = arr => {
  let count = 0
  const checkNeg = n => n < 0
  let isNeg = checkNeg(arr[0])
  
  for(num of arr){
    if(checkNeg(num) === !isNeg){
      count++
      isNeg = !isNeg
    }
  }
  
  return count
}