function makePassword(phrase) {
  const map = {i:1,o:0,s:5}
  return phrase.split(' ').map(word => {
    const c = word[0].toLowerCase()
    if(c in map) return map[c]
    return word[0]
  }).join('')
}