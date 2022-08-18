function swap (string) {
  const v = 'aeiou'
  
  return [...string].map(c => v.includes(c) ? c.toUpperCase() : c).join('')
}