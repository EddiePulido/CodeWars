function maxTriSum(numbers){
  //your code here
  numbers.sort((a,b) => b - a)
  
  let sum = numbers[0]
  let count = 1
  
  for(let i = 1; i < numbers.length; i++){
    if(numbers[i] != numbers[i-1] && count < 3){
      sum += numbers[i]
      count++
    }
  }
  
  return sum
}