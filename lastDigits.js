function lastDigit(n, d) {
  let arr = n.toString().split('')
  
  return d > 0 ? arr.slice(-d).map(e => +e) : []
}