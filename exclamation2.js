function replace(s){
  //coding and coding....
  const vowels = 'aeiou'
  return s.split('').map(c => vowels.includes(c.toLowerCase()) ? '!' : c).join('')
  
}