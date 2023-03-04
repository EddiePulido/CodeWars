function encode(text){
  text = text.toLowerCase()
  const isChar = c => c.toLowerCase() !== c.toUpperCase()
  return [...text].map(c => !isChar(c) ? c : c.charCodeAt() % 2 ? 0 : 1).join('')
}