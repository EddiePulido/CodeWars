function toWeirdCase(string){
  return string.split(' ').map(w => {
    return alterCase(w)
  }).join(' ')
}

function alterCase(str){
  return str.split('').map((c,i) => {
    return i % 2 ? c.toLowerCase() :
                   c.toUpperCase()
  }).join('')
}