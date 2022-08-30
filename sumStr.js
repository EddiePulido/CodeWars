function sumOfIntegersInString(s){
  const digits = '0123456789'
  let sum = 0
  let i = 0
  
  while(i < s.length){
    let j = i + 1
    if(digits.includes(s[i])){
      while(digits.includes(s[j])){
        j++
      }
      sum+= +s.slice(i,j)
      i = j
    }else{
      i++
    }
  }
  
  return sum
}