function additionWithoutCarrying(a,b) {
  let s = ''
  
  const num1 = [...(a+'')].reverse()
  const num2 = [...(b+'')].reverse()
  
  let i = 0
  
  while(i < num1.length && i < num2.length){
    let val1 = +num1[i]
    let val2 = +num2[i]
    
    s += (val1 + val2) % 10
    i++
  }
  
  if(i < num1.length){
    s += num1.slice(i).join('')
  }
  
  if(i < num2.length){
    s += num2.slice(i).join('')
  }

  return +s.split('').reverse().join('')
}