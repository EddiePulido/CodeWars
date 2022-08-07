function swap(str){
  return [...str].map(c => c.toUpperCase() === c ? c.toLowerCase() : c.toUpperCase()).join('')
}