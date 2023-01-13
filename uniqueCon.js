function countConsonants(str) {
  const isChar = c => c.toLowerCase() !== c.toUpperCase()
  const v = 'aeiouAEIOU'
  const count = {}
  
  return [...str.toLowerCase()].reduce((a,c) => {
    
    if(isChar(c) && !v.includes(c)){
      if(!count[c]) (++a, count[c] = 1)
    }
    return a
  },0)
}