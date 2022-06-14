function nbDig(n, d) {
  let square = []
  
  for(let i = 0; i <= n; i++) square.push(i ** 2)
  
  const countDig = num => num.split('').filter(dig => dig == d).length
  
  return square.reduce((acc, c) => acc + countDig(c.toString()), 0)
}
