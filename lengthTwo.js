function alternate(n, firstValue, secondValue){
  let arr =  []
  
  for(let i = 0; i < n; i++){
    i % 2 ? arr.push(secondValue) : arr.push(firstValue)
  }
  
  
  return arr
}