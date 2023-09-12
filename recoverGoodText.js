const badText = readline();

const isChar = c => c.toLowerCase() !== c.toUpperCase() || c === ' '

const map = { 0: 'o', 1: "i", 3: "e", 4: "a" }

console.log([...badText].map(e => e in map ? map[e] : isChar(e) ? e : '').join('') || 'IRRECOVERABLE');