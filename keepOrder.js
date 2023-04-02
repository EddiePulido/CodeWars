function keepOrder(arr, val) {
  for(let i = 0; i < arr.length; i++){
    if(!i && val <= arr[i]) return 0
    if(arr[i-1] < val && val <= arr[i]) return i
  }
  return arr.length
}