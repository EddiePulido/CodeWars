function allContinents(list) {
  const set = new Set()
  list.forEach(p => {
    set.add(p.continent)
  })

  return set.size === 5
}