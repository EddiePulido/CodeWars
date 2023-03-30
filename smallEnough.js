function smallEnough(a, limit){
  if(!a.length) return true
  if(a[0] > limit) return false
  return smallEnough(a.slice(1), limit)
}