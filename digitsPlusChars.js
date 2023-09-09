const a = readline();
const isChar = c => c.toLowerCase() !== c.toUpperCase()
const d = '0123456789'
console.log([...a].reduce((a,c) => {
    if(isChar(c)){
        if(c === c.toUpperCase()){
            return a + (c.charCodeAt() - 64) * 3
        }else{
            return a + (c.charCodeAt() - 96) * 2
        }
    }
    if(d.includes(c)){
        return a + +c
    }

    return a
}, 0))