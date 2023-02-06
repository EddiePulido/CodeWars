function pairZeros(arr) {
  let needsPair = false
  
  return arr.filter(n => {
    let result = true
    if(n === 0){
      if(needsPair) result = false
      needsPair = !needsPair
    }
    return result
  })
}