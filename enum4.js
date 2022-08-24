function none(arr, fun){
  return arr.every(e => !fun(e))
}