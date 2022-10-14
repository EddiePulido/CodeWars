function duplicateEncode(word){
  word = word.toLowerCase()
  let hash = [...word].reduce((a, c) => {
    a[c] = ++a[c] || 1
    return a}, {})
   
  return [...word].map(e => hash[e] === 1 ? '(' : ')').join('')
}