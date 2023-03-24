Array.prototype.filter = function (func) {
  const arr = []
  
  for(e of this) if(func(e)) arr.push(e)
  
  return arr
}

Array.prototype.filter = function (func) {
  return this.reduce((a,c) => func(c) ? (a.push(c),a) : a,[])
}