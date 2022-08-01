function validSpacing(s) {
  
  for(let i = 1; i < s.length-1; i++){
    if(s[i] === ' ' && s[i+1] === ' ') return false
  }
  
  return s[0] != ' ' && s[s.length-1] != ' '
} 