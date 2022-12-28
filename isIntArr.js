function isIntArray(arr) {
  if(!arr) return false
  if(!arr.length) return true
  
  return arr.every(e => typeof e === 'number' && !isNaN(+e) && parseInt(e) === e)
}