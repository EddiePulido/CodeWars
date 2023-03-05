const S = readline();

const isChar = c => c.toUpperCase() != c.toLowerCase()
const chars = s => s.length >= 8
const dig = s => [...s].some(e => Number(e))
const low = s => [...s].some(e => isChar(e) && e.toLowerCase() == e)
const up = s => [...s].some(e => isChar(e) && e.toUpperCase() == e)

console.log(chars(S) && dig(S) && low(S) && up(S));
