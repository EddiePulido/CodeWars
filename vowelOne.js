function vowelOne(s){
  let v = 'aeiou'
  
  return [...s.toLowerCase()].map(c => v.includes(c) ? '1' : '0').join('')
}