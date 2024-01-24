const isValid = s => {
  const stack = []

  const map = {
      '}' : '{',
      ']' : '[',
      ')' : '(',
  }

  const close = ')]}'

  for(p of s){
      if(!close.includes(p)){
          stack.push(p)
      }else if(stack.pop() !== map[p]){
          return false
      }
  }

  return !stack.length
}