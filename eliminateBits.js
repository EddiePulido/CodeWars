function eliminateUnsetBits(number) {
  const num = [...number].filter(e => e === '1').join('')
  
  return parseInt(num, 2) || 0
}