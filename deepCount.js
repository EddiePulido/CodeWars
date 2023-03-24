function deepCount(arr) {
  if (!Array.isArray(arr)) return 0
  
  let count = 0
  for (let i = 0; i < arr.length; i++) count += deepCount(arr[i]) + 1
  
  return count
}

function deepCount(arr) {
  if (!Array.isArray(arr)) return 0
    
  return arr.reduce((a,c) => a + deepCount(c) + 1, 0)
}