function borrow(s){
  const isChar = c => c.toLowerCase() !== c.toUpperCase()
  return [...s.toLowerCase()].filter(c => isChar(c) && c.toLowerCase() === c).join('')
}