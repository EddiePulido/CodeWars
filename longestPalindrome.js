function longestPalindrome(str) {
  const counts = [...str.toLowerCase()].reduce((a,c) => isAlpha(c) ? (a[c] = ++a[c] || 1, a) : a, {})
  let count = 0
  let hasOdd = false
  
  for(k in counts){
    if(counts[k] % 2 === 0){
      count += counts[k]
    }else{
      count += counts[k]-1
      hasOdd = true
    }
  }
  
  if(hasOdd) count++
  
  return count
}

const isAlpha = c => '0123456789'.includes(c) || c.toLowerCase() !== c.toUpperCase()