const stringSuffix = s => {
  let sum = 0
  
  for(let i = 0; i < s.length; i++){
    const str = s.slice(i)
    let j = 0
    
    while(j < s.length && str[j] === s[j]) j++
    
    sum += j
  }
  
  return sum
}