function one(arr, fun){
  return arr.filter(e => fun(e)).length === 1
}