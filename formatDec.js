function twoDecimalPlaces(number) {
  let arr = number.toString().split('.')
  
  let end = arr[1].slice(0,2)
  
  return +(arr[0] + '.' + end)
}