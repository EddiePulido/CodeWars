function palindrome(num,s) { 
  if(typeof (num + s) !=='number' || num < 0 || s < 0) return 'Not valid'
  
  const arr = []
  
  while(s){
    if(num > 9 && isPal(num)){
      arr.push(num)
      s--
    }
    
    num++
  }
  
  return arr
}

const isPal = n => +[...(n+'')].reverse().join('') === n