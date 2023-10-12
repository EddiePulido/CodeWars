function palindrome(num) { 
  if(typeof num !== 'number' || num < 0) return 'Not valid'
  let a = num
  let b = num
  
  while(!isPali(a) && !isPali(b)){
    console.log({a,b})
    a--
    b++
  }
  
  return isPali(b) ? b : a
}

const isPali = n => {
  if(n < 10) return false
  
  const s = n.toString()
  let i = 0
  let j = s.length - 1
  
  while(i < j){
    if(s[i] !== s[j]) return false
    i++
    j--
  }
  
  return true
}