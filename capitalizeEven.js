

const s = readline().split(' ')
const f = c => c.toUpperCase() !== c.toLowerCase()

console.log(s.map(e => {
    const word = [...e].filter(f).join('')
    if(word.length % 2 == 0) return e.toUpperCase()

    return e
}).join(' '))