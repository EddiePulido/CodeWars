function splitAndMerge(string, separator) {
  let arr = string.split(' ')
  
  return arr.map(w => w.split('').join(separator)).join(' ')
}