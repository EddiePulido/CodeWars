function removeSmallest(numbers) {

  let arr = []
  
  let min = Infinity
  let i = 0
  
  numbers.forEach((num, idx) => {
    if(num < min){
      min = num
      i = idx
    }
  })
  
  numbers.forEach((num, idx) => {
    if(i != idx) arr.push(num)
  })
  
  return arr
}