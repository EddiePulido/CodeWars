const str = readline().split(' ')

const d = '0123456789'

const isChar = c => (c.toLowerCase() !== c.toUpperCase()) || d.includes(c)

const arr = str.map(e => {
    const a = [...e].filter(l => isChar(l)).reverse()
    
    const result = [...e]

    for(let i = 0; i < result.length; i++){
        if(isChar(result[i])){
            result[i] = a.shift()
        }
    }

    return result.join('')
}).join(' ')

print(arr)