function dup(s) {
  return s.map(w => [...w].filter((c, i, a) => a[i+1] !== c).join(''))
}