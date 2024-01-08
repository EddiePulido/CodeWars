function seaSick(x){

  let changes = 0
  let last = x[0]
  const twenty = x.length * .2
  
  for(c of x){
    if(c !== last){
      changes++
      last = c
    }
  }
  
  return changes > twenty ? 'Throw Up' : 'No Problem'
}