function dative(word) {
  const front = 'e, é, i, í, ö, ő, ü, ű'.split(', ')
  const back = 'a, á, o, ó, u, ú'.split(', ')
  
  let f = -1
  let b = -1
  
  for(let i = word.length - 1; i >= 0; i--){
    const char = word[i]
    if(f === -1 && front.includes(char)) f = i
    if(b === -1 && back.includes(char)) b = i
  }
  
  return f > b ? word + 'nek' : word + 'nak'
}