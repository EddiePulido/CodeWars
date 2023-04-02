const isSquare = arr => {
  return arr.length ? arr.every(e => Math.sqrt(e) % 1 === 0) : undefined
}