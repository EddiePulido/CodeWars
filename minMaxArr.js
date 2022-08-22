function solve(arr){
  arr.sort((a,b) => b - a)
  
  const result = []
  let j = arr.length-1
  let i = 0
  
  while(i <= j){
    result.push(arr[i++])
    if(i - 1 != j) result.push(arr[j--])
  }
  
  return result
};