function isDigit(s) {
  
  console.log({s})
  if(s === '-0') return true
  if(s === ' ' || s === '') return false
  return !isNaN(s.trim())
}