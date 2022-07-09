var FilterString = function(value) {
  let d = '0123456789'
  
  return +value.split('').filter(c => d.includes(c)).join('')
}