Array.prototype.reverse = function() {
  const arr = [...this]
  const result = []
  
  for(let i = arr.length - 1; i >= 0; i--){
    result.push(arr[i])
  }
  
  return result
};