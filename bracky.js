/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = (s) => {
  let hash = {
      '(' : ')',
      '{' : '}',
      '[' : ']'
  }
  
  const stack = []
  
  for(p of s){
      if(hash[p]) stack.push(p)
      else if(hash[stack.pop()] !== p) return false
  }
  
  return stack.length === 0
};