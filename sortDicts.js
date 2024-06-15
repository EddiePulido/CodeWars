function sortDict(dict) {
  return Object.entries(dict)
          .sort((a,b) => b[1] - a[1])
          .map(e => isNaN(e[0]) ? e : e.map(Number))
}