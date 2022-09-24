function score( dice ) {
  let score = 0

  score += dice.filter(e => e === 1).length === 4 ? 1100 : 0
  score += dice.filter(e => e === 1).length === 5 ? 1200 : 0
  score += dice.filter(e => e === 1).length === 3 ? 1000 : 0
  score += dice.filter(e => e === 5).length === 4 ? 550 : 0
  score += dice.filter(e => e === 5).length === 5 ? 600 : 0
  score += dice.filter(e => e === 6).length === 3 ? 600 : 0
  score += dice.filter(e => e === 5).length === 3 ? 500 : 0
  score += dice.filter(e => e === 4).length >= 3 ? 400 : 0
  score += dice.filter(e => e === 3).length >= 3 ? 300 : 0
  score += dice.filter(e => e === 2).length >= 3 ? 200 : 0
  score += dice.filter(e => e === 1).length === 1 ? 100 : 0
  score += dice.filter(e => e === 1).length === 2 ? 200 : 0
  score += dice.filter(e => e === 5).length === 1 ? 50 : 0
  score += dice.filter(e => e === 5).length === 2 ? 100 : 0
  
  
  return score
}