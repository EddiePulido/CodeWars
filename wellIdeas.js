function well(x){
  let count = 0
  
  for(let i = 0; i < x.length; i++){
    let y = x[i]
    for(let j = 0; j < y.length; j++)
      if(typeof y[j] === 'string' && y[j].toLowerCase() === 'good') count++
  }
  
  return count > 2 ? 'I smell a series!' : count >= 1 ? 'Publish!' : 'Fail!'
}