const sentence = readline().split(' ')

const a = sentence.filter((e,i) => {
    return [...e].every(c => {
        return c === c.toUpperCase()
    })
})

const b = sentence.filter((e,i) => {
    return [...e].every(c => {
        return c === c.toLowerCase()
    })
})

const cap = w => {
    if(!w) return 'None'
    return w[0].toUpperCase() + w.slice(1).toLowerCase()
}

console.log(cap(a.join(' ')))
console.log(cap(b.join(' ')))