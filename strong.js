function strong(n) {
  
  const fact = num => Array(num).fill(0).reduce((acc, c, i) => acc * (i+1), 1)
  
  let d = n.toString().split('').map(n => +n)
  
  let num = d.reduce((acc, c) => acc + fact(c), 0)
  
  console.log({num})
  console.log({n})
  
  return num === n ?  "STRONG!!!!": "Not Strong !!" ;
}