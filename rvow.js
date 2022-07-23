var removeVowels = function(str){
  const v = 'aeiou'
  return str.split('').filter(c => !v.includes(c)).join('')
}