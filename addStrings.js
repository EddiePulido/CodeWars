function sumStrings(a,b) { 
  let result = ''
  
  while(a[0] === '0'){
    a = a.replace('0','')
  }
   
  while(b[0] === '0'){
    b = b.replace('0', '')
  }
  
  let i = a.length - 1
  let j = b.length - 1
  let carry = 0
  
  while(i >= 0|| j >= 0){
    let v1 = +a[i--] || 0
    let v2 = +b[j--] || 0
    let sum = v1 + v2 + carry
    if(sum > 9){
      sum = sum % 10
      carry = 1
    }else{
      carry = 0
    }
    
    result += sum
    
  }
  if(carry){
    result += 1
  }
  
  return result.split('').reverse().join('')
}