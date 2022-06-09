const rps = (p1, p2) => {
  
  const p1win = 'Player 1 won!'
  const p2win = 'Player 2 won!'
  
  const results = {
    'scissorspaper' : p1win,
    'scissorsrock' : p2win,
    'rockscissors' : p1win,
    'rockpaper' : p2win,
    'paperrock' : p1win,
    'paperscissors' : p2win
  }
  
  const choices = p1+p2
  
  return p1 === p2 ? 'Draw!' : results[choices]
  
};