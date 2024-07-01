const count = w => {
  return [...w].reduce((a,c) => (a[c] = ++a[c] || 1, a), {})
}
for (let i = 0; i < 5; i++) {
  const ROW = readline()
  const map = count(ROW.toLowerCase())

  let max = Math.max(...Object.values(map))

  console.log('1'.repeat(max) + ROW[0].repeat(max))
}

