function tidyNumber(n){
  let str = n.toString()
  
  return str === str.split('').sort().join('')
}