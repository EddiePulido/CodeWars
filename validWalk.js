function isValidWalk(walk) {
  if(walk.length != 10) return false
  
  let west = walk.filter(e => e === 'w').length
  let east = walk.filter(e => e === 'e').length
  let north = walk.filter(e => e === 'n').length
  let south = walk.filter(e => e === 's').length
  
  return west === east && north === south
}