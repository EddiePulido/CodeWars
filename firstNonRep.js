function firstNonRepeatingLetter(s) {
  const hash = {}
  
  for(c of s) hash[c.toLowerCase()] = ++hash[c.toLowerCase()] || 1
  
  for(let i = 0; i < s.length; i++){
    if(hash[s[i].toLowerCase()] === 1) return s[i] 
  }
  
  return ''
}