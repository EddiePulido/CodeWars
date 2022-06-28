function foldTo(distance) {
  if(distance < 0) return null
  
  let thick = .0001
  let folds = 0
  while(thick < distance){
    thick = thick * 2
    folds++
  }
  
  return folds
}