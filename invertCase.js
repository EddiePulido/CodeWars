const S = readline()

const isChar = c => c.toLowerCase() !== c.toUpperCase()
let d = '0123456789'

console.log([...S].map(c => {
    if(c === ' ' || d.includes(c)){
        return c
    }
    if(isChar(c)){
        if(c === c.toUpperCase()){
            return c.toLowerCase()
        }
        return c.toUpperCase()
    }

    return ''
}).join(''))