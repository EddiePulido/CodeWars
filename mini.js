function min(arr, toReturn) {
  let min = arr[0]
  let ind = 0
  
  for(let i = 1; i < arr.length; i++){
    if(min > arr[i]){
      min = arr[i]
      ind = i
    }
  }
  
  return toReturn === 'value' ? min : ind
}