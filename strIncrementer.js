function incrementString (str) {
  // return incrementedString
  const digits = '1234567890'
  let hasZero = false
  
  if(isNaN(Number(str.slice(-1)))){
    return str + 1
  }
  
  let lastDig = str.slice(-1)

  
  let num = ''
  let i = str.length-1
  
  while(digits.includes(str[i])){
    num += str[i]
    i--
  }
  
  let numArr = num.split('').reverse()

  while(numArr[0] === '0'){
    hasZero = true
    numArr.shift()
  }
  
  if(numArr.length === 0) numArr[0] = 0
  
  let addOn = Number(numArr.join('')) + 1

  
  return lastDig === '9' && hasZero ? str.slice(0,str.length-numArr.length - 1) + addOn : str.slice(0,str.length-numArr.length) + addOn
}
