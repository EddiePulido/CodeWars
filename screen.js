function findScreenHeight(width, ratio) {
  const r = ratio.split(':')
  let h = width * +r[1] / +r[0]
  
  return width +'x' + h
}