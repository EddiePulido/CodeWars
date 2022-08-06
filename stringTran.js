function stringTransformer(str) {
  return str.split(' ').reverse().map(w => switchCase(w)).join(' ')
}

function switchCase(word){
  return [...word].map(c => {
    return c.toUpperCase() === c ? c.toLowerCase() : c.toUpperCase()
  }).join('')
}