function points(games) {
  let points = 0
  
  games.forEach(game => {
    const scores = game.split(':')
    const x = Number(scores[0])
    const y = Number(scores[1])
    
    if(x > y){
      points += 3
    }else if ( x === y){
      points += 1
    }
  })  
  return points
}