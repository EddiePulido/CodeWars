function wordValue(a) {
  
  const result = []
  
  const calc = w => {
    const alpha = ' abcdefghijklmnopqrstuvwxyz'
    return w.split('').reduce((acc, c) => acc + alpha.indexOf(c.toLowerCase()), 0)
  }
  
  a.forEach((e, i) => {
    result.push(calc(e) * (i + 1))
  })
  
  return result
}