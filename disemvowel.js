function disemvowel(str) {
  const vowels = 'aeiou'
  
  return str.split('').filter(c => !vowels.includes(c.toLowerCase())).join('')
}