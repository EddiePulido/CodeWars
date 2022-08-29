function validBraces(braces){
  const hash = {
    '}' : '{',
    ')' : '(',
    ']' : '['
  }
  
  const open = '{(['
  const close = '})]'
  
  const stack = []
  
  for(c of braces){
    if(close.includes(c)){
      if(stack.pop() != hash[c]) return false
    }
    if(open.includes(c)){
      stack.push(c)
    }
  }
  
  return stack.length === 0
}