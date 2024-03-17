const rpsls = (one, two) => {
  if(one === two) return 'Draw!'
  
  const p1 = 'Player 1 Won!'
  const p2 = 'Player 2 Won!'
  
  const win = `scissorspaper paperrock rocklizard lizardspock spockscissors scissorslizard lizardpaper paperspock spockrock rockscissors`.split(' ')
  
  return win.includes(one+two) ? p1 : p2
}