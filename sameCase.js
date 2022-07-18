function sameCase(a, b){
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  const isLetter = c => alpha.includes(c.toLowerCase())
  const lower = c => alpha.includes(c)
  const upper = c => alpha.toUpperCase().includes(c)
  
  if(!isLetter(a) || !isLetter(b)) return -1
  if((lower(a) && lower(b)) || (upper(a) && upper(b))) return 1
  if((lower(a) && upper(b)) || (upper(a) && lower(b))) return 0
}