function arrayLeaders(numbers){
  
  let arr = []
  
  let sum = 0
  
  for(let i = numbers.length-1; i >= 0; i--){
    if(numbers[i] > sum){
      arr.unshift(numbers[i])
    }
    
    sum += numbers[i]
  }
  
  return arr;
}