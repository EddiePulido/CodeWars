function toAcronym(inp){
  return inp.split(' ').map(e => e[0].toUpperCase()).join('')
}  