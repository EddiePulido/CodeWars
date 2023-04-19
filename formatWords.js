function formatWords(words){
  if(!words) return ''
  
  words = words.filter(e => e)
  if(words.length === 2) return words.join(' and ')
  if(words.length > 2) return words.slice(0,-1).join(', ') + ' and ' + words.pop()
  if(words.length) return words[0]
  
  return ''
}