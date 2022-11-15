function comp(array1, array2){
  if(!array1 || !array2 || array2.length !== array1.length) return false
  let hash = array1.reduce((a,c) => (a[c*c] = ++a[c*c] || 1, a), {})
  return array2.every(e => hash[e]--)
}