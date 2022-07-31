const orderedCount = text =>{
  const obj = {}
  const arr = []
  
  text.split('').forEach((c => {
    if(!arr.includes(c)) arr.push(c)
    obj[c] = ++obj[c] || 1
  }))
  
  return arr.map(e => [e, obj[e]])
}