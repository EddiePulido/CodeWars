function mxdiflg(a1, a2) {
  if(a1.length === 0 || a2.length === 0) return -1
  
  let ab = 0
  let as = a1[0].length
  let bb = 0
  let bs = a2[0].length
  
  a1.forEach(s => {
    const l = s.length
    if(l > ab) ab = l
    if(l < as) as = l
  })
  
  a2.forEach(s => {
    const l = s.length
    if(l > bb) bb = l
    if(l < bs) bs = l
  })
  
  return Math.max((ab - bs), (bb - as))
  
  
}