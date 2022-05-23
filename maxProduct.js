function maxProduct(numbers, size){
  //your code here
  
  numbers.sort((a,b) => b - a)
  
  let answer = 1
  let i = 0
  
  while(i < size){
    answer *= numbers[i] 
    i++
  }
  
  return answer
}