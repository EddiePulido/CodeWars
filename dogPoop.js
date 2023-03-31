function crap(x, bags, cap){
  if(!cap) bags = 0
  let c = cap
  for(row of x){
    for(plot of row){
      if(plot === '@') cap--
      if(cap <= 0){
        bags--
        cap = c
      }
      if(plot === 'D') return 'Dog!!'
    }
  }
  
  return bags >= 0 ? 'Clean' : 'Cr@p'
}