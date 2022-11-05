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
  
  arr.sort()
  arr.sort((a,b) => hash[b] - hash[a])

  
  return arr[n-1]
}