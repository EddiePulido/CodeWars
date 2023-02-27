for (let i = 0; i < 5; i++) {
    
  const ROW = readline().toUpperCase()
  let map = [...ROW].reduce((a,c) => {
      if(c == ' ') return a
      a[c] = ++a[c] || 1
      return a
  }, {})

  let max = Math.max(...Object.values(map))

  console.log('1'.repeat(max) + ROW[0].repeat(max))
}
