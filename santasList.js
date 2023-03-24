function findChildren(list, kids) {
  const hash = list.reduce((a,c) => (a[c] = 1, a), {})
  
  return kids.filter(e => hash[e] && hash[e]--).sort()
}