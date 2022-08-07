function palindrome(num) { 
  if(typeof num !== 'number' || num < 0) return "Not valid"
  let str = num.toString()
  
  let j = str.length-1;
  
  for(let i = 0; i < j; i++){
    if(str[i] !== str[j--]) return false
  }
  
  return true
} 