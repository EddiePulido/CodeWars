function groupByCommas(n) {
  if(n < 1000) return n.toString()
  
  let str = n.toString()
  let result = []
  let count = 1
  
  for(let i = str.length - 1; i >= 0; i--){
    if(count % 3 === 0 && i != 0){
      result.unshift(str[i])
      result.unshift(',')
    }else{
      result.unshift(str[i])
    }
    
    count++
  }
  
  return result.join("")
  
}