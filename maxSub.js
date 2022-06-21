var maxSequence = function(arr){
  if(!arr.length) return 0
  
  let best = arr[0]
  
  let sum = arr[0]
  
  for(let i = 1; i < arr.length; i++){
    sum = Math.max(sum + arr[i], arr[i])
    if(sum > best) best = sum
  }
  
  return Math.max(best, 0)
}