const isPalindrome = s => {
  s = [...s].filter(isLetter).join('').toLowerCase()

  let j = s.length - 1

  for(let i = 0; i < j; i++, j--){
      if(s[i] !== s[j]) return false
  }

  return true
}

const isLetter = c => c.toUpperCase() !== c.toLowerCase()