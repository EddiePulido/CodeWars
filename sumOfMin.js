function sumOfMinimums(arr) {
  // your code here
  let sum = 0
  for(let i = 0; i < arr.length;i++){
    arr[i].sort((a,b) => a - b)
    sum += arr[i][0]
  }
  
  return sum
}