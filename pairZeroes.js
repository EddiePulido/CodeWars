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

const pairZeros = (a,z=0) => a.filter(n => n != 0 || !(z++ % 2))