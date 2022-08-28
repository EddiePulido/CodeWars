function addLetters(...letters) {
  const alpha = ' abcdefghijklmnopqrstuvwxyz'
  
  let newLetter = letters.reduce((a,c) => a + alpha.indexOf(c), 0)
  if(newLetter % 26 === 0) return 'z'
  
  return newLetter > 26 ? alpha[newLetter % 26] : alpha[newLetter]
}