function stonePick(arr) {
  const cobble = arr.reduce((a,c) => a + +(c === 'Cobblestone'), 0)
  const sticks = arr.reduce((a,c) => {
    if(c === 'Wood') return a + 4
    if(c === 'Sticks') return a + 1
    
    return a
  }, 0)
  
  return Math.floor(Math.min(cobble/3, sticks/2))
}