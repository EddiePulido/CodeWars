function changer(str) { 
  const a = 'abcdefghijklmnopqrstuvwxyz'
  const v = 'aeiou'
  const isChar = c => c.toUpperCase() != c.toLowerCase()
  
  return [...str.toLowerCase()].map(c => {
    if(!isChar(c)) return c
    let char = a[(a.indexOf(c) + 1) % 26]
    if(v.includes(char)) char = char.toUpperCase()
    return char
  }).join('')
}