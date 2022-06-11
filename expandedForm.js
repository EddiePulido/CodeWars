function expandedForm(num) {
  // Your code here
  let result = ''
  const nStr = num.toString()
  let zeroes = Math.max(nStr.length - 1,0)
  let i = 0
  
  while(zeroes >= 0){
    let z = '0'.repeat(zeroes)
    
    if(nStr[i] !== '0') result += nStr[i] + z + ' + '

    i++
    zeroes--
  }
  
  return result.slice(0,result.length-3)
  
  
}
