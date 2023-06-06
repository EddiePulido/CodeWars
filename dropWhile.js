function dropWhile(arr, pred) {
  let i = 0
  
  while(i < arr.length && pred(arr[i])) i++
  
  return arr.slice(i)
}