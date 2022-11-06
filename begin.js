function oneTwoThree(n) {
  let result = ''
  let num = n
  
  while(num > 9){
    num -= 9
    result += '9'
  }
  
  result += num
  
  return [result, n !== 0 ? '1'.repeat(n) : '0'];
}