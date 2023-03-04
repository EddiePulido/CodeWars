function nerdify(txt){
  const map = {
    a : '4',
    e : '3',
    l : '1',
    A : '4',
    E : '3'
  }
  
  return [...txt].map(c => map[c] || c).join('')
}