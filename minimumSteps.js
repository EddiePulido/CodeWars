function minimumSteps(numbers, value){
  //your code here
  numbers.sort((a,b) => a-b)
  
  if(numbers[0] > value){
    return 0
  }
  
  let times = 0
  let sum = 0
  let i = 0
  
  while(sum < value){
    sum += numbers[i]
    times++
    i++    
  }
  
  return times-1
  
  }