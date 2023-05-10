const uniqueOccurrences = arr => {
  const count = arr.reduce((a,c) => (a[c] = ++a[c] || 1, a), {})

  const vals = Object.values(count)

  return vals.length === (new Set(vals)).size
}