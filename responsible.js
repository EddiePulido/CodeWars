function hydrate(s) {
  let arr = s.split('')
  let sum = arr.reduce((acc, c)=> +c ? acc + +c : acc + 0, 0)
  
  return sum === 1 ? `${sum} glass of water` : `${sum} glasses of water`
}