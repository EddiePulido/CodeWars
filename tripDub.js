function tripledouble(num1, num2) {
  let n1 = num1.toString()
  let n2 = num2.toString()
  
  let tnum = []
  
  for(let i = 0; i < n1.length - 2; i++)
    if(n1[i] === n1[i+1] && n1[i] === n1[i+2])
      tnum.push(n1[i])
  
  if(tnum.length === 0) return 0
  
  for(let i = 0; i < n2.length - 1; i++)
    if(tnum.includes(n2[i]) && n2[i+1] === n2[i])
      return 1
  
  return 0
}