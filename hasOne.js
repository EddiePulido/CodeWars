function hasOneChar(s) {
  let arr = Array.from(new Set(s.split('')))
  
  return arr.length === 1
}