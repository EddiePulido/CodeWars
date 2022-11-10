var removeDuplicates = function(s) {
  let result = ''
  s = s.split('')

  for(let i = 0; i < s.length - 1; i++){
      if(s[i] === s[i + 1]){
          s.splice(i, 2)
          i--
          i--
      } 
  }

  return s.join('')
};