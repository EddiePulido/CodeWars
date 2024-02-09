const s = readline()

const v = 'aeiouy'

const vowels = [...s].filter(e => v.includes(e))

console.log([...s].map(e => v.includes(e) ? vowels.pop() : e).join(''))