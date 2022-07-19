function calc(x){
  let total1 = ''
  let total2 = ''
  
  for(let i = 0; i < x.length; i++) total1 += x[i].charCodeAt()
  for(let i = 0; i < total1.length; i++) total1[i] === '7' ? total2 += '1' : total2 += total1[i]
  
  const sum = s => [...s].reduce((acc, c) => acc + +c, 0)
  
  return sum(total1) - sum(total2)
}