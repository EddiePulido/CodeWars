const vowelShift = (text, n) => {
  if(text === null) return null
  
  const v = 'aeiouAEIOU'
  
  const vowels = [...text].filter(c => v.includes(c))
  
  if(n > 0){
    while(n--){
      let temp = vowels.pop()
      vowels.unshift(temp)
    }
  }else{
    while(n++){
      let temp = vowels.shift()
      vowels.push(temp)
    }
  }
  
  vowels.reverse()
  
  return [...text].map(c => v.includes(c) ? vowels.pop() : c).join('')
}