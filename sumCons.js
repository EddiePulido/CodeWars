function sumConsecutives(s) {
  let result = []
  
  for(let i = 0; i < s.length; i++){
    let sum = s[i]
    while(s[i] === s[i + 1]){
      sum += s[i + 1]
      i++
    }
    
    result.push(sum)
  }

return result
}