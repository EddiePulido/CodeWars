const seq = readline()

const isChar = c => c.toLowerCase() !== c.toUpperCase()

let s = [...seq].reduce((a,c) => {
    if(isChar(c)){
        if(c === c.toUpperCase()){
            return a + (c.charCodeAt() - 64) * 2
        }

        return a + c.charCodeAt() - 96
    }

    return a
},0) + ''

console.log(s + '0'.repeat(6-s.length))