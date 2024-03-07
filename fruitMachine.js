function fruit(reels, spins){
  const bases = {
    Wild:10,
    Star: 9,
    Bell:8,
    Shell: 7,
    Seven: 6,
    Cherry: 5,
    Bar: 4,
    King: 3,
    Queen: 2,
    Jack: 1
  }
  
  const a = reels[0][spins[0]]
  const b = reels[1][spins[1]]
  const c = reels[2][spins[2]]
  
  if(a === b && b === c) return bases[a] * 10
  if(a === b) return c === 'Wild' ? bases[a] * 2 : bases[a]
  if(a === c) return b === 'Wild' ? bases[a] * 2 : bases[a]
  if(b === c) return a === 'Wild' ? bases[b] * 2 : bases[b]
    
  return 0
}