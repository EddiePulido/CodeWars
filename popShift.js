function popShift(s){
  const arr = [...s]
  const sol1 = []
  const sol2 = []
  
  while(arr.length > 1){
    sol1.push(arr.pop())
    if(arr.length) sol2.push(arr.shift())
  }
  
  return [sol1.join(''), sol2.join(''), arr.join('')]
}