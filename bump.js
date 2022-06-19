function bump(x){
  let n = [...x].filter(b => b === 'n').length
  return n > 15 ? 'Car Dead' : "Woohoo!"
}