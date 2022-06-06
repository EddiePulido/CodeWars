function squareDigits(num){
  let str = num.toString()
  
  let result = ''
  
  str.split('').forEach(digit => {
    result += Number(digit) ** 2
  })
  
  return Number(result)
}