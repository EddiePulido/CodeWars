function productArray(numbers){
  //your code here
  
  let product = numbers.reduce((a, i) => a * i, 1)
  
  let result = []
  
  numbers.forEach(num => {
    result.push(product/num)
  })
  
  return result
  
  
}