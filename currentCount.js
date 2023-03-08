const S = readline().toLowerCase()
const map = {}

console.log([...S].map(c => {
    map[c] = ++map[c] || 1
    return map[c]
}).join(''))
