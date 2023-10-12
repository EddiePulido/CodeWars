function shiftedDiff(first,second){
  let rotations = 0
  
  while(first !== second && rotations < first.length){
    first = first.slice(-1) + first.slice(0, -1)
    rotations++
  }
  
  return rotations === first.length ? -1 : rotations
}