Array.prototype.filter = function (func) {
  const arr = []
  
  for(e of this) if(func(e)) arr.push(e)
  
  return arr
}