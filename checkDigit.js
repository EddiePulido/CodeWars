function checkDigit(number, index1, index2, digit) {
  const min = Math.min(index1, index2)
  const max = Math.max(index1, index2)+1
  const str = number.toString().slice(min,max)
  
  return str.includes(digit)
}