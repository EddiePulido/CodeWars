var maxSequence = function(arr){
  console.log({arr})
  if(!arr.length) return 0
  
  const best = [arr[0]]
  
  let sum = arr[0]
  
  for(let i = 1; i < arr.length; i++){
    sum = Math.max(sum + arr[i], arr[i])
    best.push(sum)
  }
  
  console.log({best})
  
  return Math.max(...best,0)
}