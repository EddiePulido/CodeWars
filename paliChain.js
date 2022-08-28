const  palindromeChainLength = n => {
  const rev = s => s.split('').reverse().join('')
  const isPali = s => s === rev(s)
  const flipAdd = s => +s + +rev(s)
  
  let count = 0
  
  while(!isPali(n.toString())){
    n = flipAdd(n.toString())
    count++
  }
    
  return count
};