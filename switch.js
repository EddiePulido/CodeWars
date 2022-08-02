function vowel2index(str) {
  let result = ''
  const v = 'aeiou'
  
  for(let i = 0; i < str.length; i++){
    result += v.includes(str[i].toLowerCase()) ? i + 1 : str[i]
  } 
  
  return result
}