function remove (str) {
  const arr = str.split(' ')
  return arr.map(e => {
    while(e.slice(-1) === '!') e = e.slice(0,-1)
    return e
  }).join(' ')
}