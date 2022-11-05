function rank(st, we, n) {
  let arr = st.split(',')
  if(st.length === 0) return 'No participants'
  if(n > arr.length) return "Not enough participants"
  
  let alpha = '.abcdefghijklmnopqrstuvwxyz'
  
  
  let hash = {}
  
  arr.forEach((name, i) => {
    let score = name.split('').reduce((a,c) => a + alpha.indexOf(c.toLowerCase()), name.length)
    hash[name] = score * we[i]
  })
  
  const alphaSort = (a,b) => {
    if (a < b) {
    return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
  arr = arr.sort((a,b) => hash[a] === hash[b] ? alphaSort(a,b) : hash[b] - hash[a])

  
  return arr[n-1]
}