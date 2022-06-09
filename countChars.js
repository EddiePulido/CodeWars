function count (string) {  
  const map = {}
  
  string.split('').forEach(c =>{
    map[c] ? map[c]++ : map[c] = 1
  })
  
  return map
}