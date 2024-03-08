function gimmeTheLetters(sp) {
  const [start, end] = sp.split('-')
  
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  
  if(start === start.toUpperCase()) alpha = alpha.toUpperCase()
  
  return alpha.slice(alpha.indexOf(start), alpha.indexOf(end) + 1)
}