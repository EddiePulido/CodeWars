function minSum(arr) {
  // your code here
  
  arr.sort((a,b) => a - b)
  
  
  let j = arr.length-1
  let sum = 0
  
  for(let i = 0; i < arr.length/2; i++){
    sum += arr[i] * arr[j]
    
    j--
  }
  
  return sum
}