function countWords(str) {
  let s = ''
  
  for(c of str){
    if(c.charCodeAt() === 65279) s += ' '
    else s += c
  }
  
  s = s.trim()
  
  while(s.includes('  ')) s = s.replaceAll('  ', ' ')
  if(!s.length) return 0
  return s.split(' ').length
}