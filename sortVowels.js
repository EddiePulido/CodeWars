function sortVowels(s){
  if(typeof s !== 'string') return ''
  const v = 'aeiouAEIOU'
  
  return [...s].map(c => v.includes(c) ? '|' + c : c + '|').join('\n')
}