function evil(n) {
  const bi = n.toString(2)
  let ones = [...bi].filter(d => d === '1').length
  
  return ones % 2 ? `It's Odious!` : `It's Evil!`
}