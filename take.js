function take(arr, n) {
  
  
  let a = []
  
  for(let i = 0; i < n; i++) if(i < arr.length) a.push(arr[i])
  
  return a
}