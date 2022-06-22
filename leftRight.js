function alphabetWar(fight){
  
  const left = {
    'w' : 4,
    'p' : 3,
    'b' : 2,
    's' : 1
  }
  
  const right = {
    'm' : 4,
    'q' : 3,
    'd' : 2,
    'z' : 1,
  }
  
  let lScore = 0
  let rScore = 0
  
  fight.split('').forEach(c => {
    if(left[c]) lScore += left[c]
    if(right[c]) rScore += right[c]
  })
  
  return lScore > rScore ? 'Left side wins!' : rScore > lScore ? 'Right side wins!' : 'Let\'s fight again!'
  
  return "Let's fight again!";
}