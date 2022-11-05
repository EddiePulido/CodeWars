function rank(st, we, n) {
  if(st.length === 0) return 'No participants'
  const arr = st.split(',')
  
  const hash = arr.reduce((acc, name, i) => {
    const score = name
                    .toLowerCase()
                    .split('')
                    .reduce((a,c) => a + c.charCodeAt() - 96, name.length)
    acc[name] = score * we[i]
    return acc
  }, {})
  
  arr.sort().sort((a,b) => hash[b] - hash[a])
  
  return arr[n-1] || "Not enough participants"
}