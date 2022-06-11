function deleteNth(arr,n){
  const map = {}
  
  return arr.filter(el => {
    map[el] ? map[el]++ : map[el] = 1
    return map[el] <= n
  })
}