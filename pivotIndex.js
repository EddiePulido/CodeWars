const findPivotIndex = arr => {
  const total = arr.reduce((a,c) => a + c, 0)
  let sumLeft = 0
  
  for(let i = 0; i < arr.length; i++){
    const sumRight = total - arr[i] - sumLeft
    
    if(sumRight === sumLeft){
      return i
    }
    
    sumLeft += arr[i]
  }
  
  return null
}
