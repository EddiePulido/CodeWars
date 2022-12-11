function dashatize(num) {
  let str = num.toString()
  let result = ''
  let finalResult = ''
  
  for(n of str){
    if(+n % 2) result += `-${n}-`
    else result += n
  }
  
  for(let i = 0; i < result.length; i++){
    if(result[i] === '-' && result[i + 1] === '-') continue
    
    finalResult += result[i]
  }
  
  if(finalResult[0] === '-') finalResult = finalResult.slice(1)
  if(finalResult.slice(-1) === '-') finalResult = finalResult.slice(0,-1)
  
  return  finalResult
}