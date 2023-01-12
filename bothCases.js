const s = readline();

const isChar = c => c.toLowerCase() !== c.toUpperCase()

const opposite = c => {
    if(c === c.toUpperCase()){
        return c.toLowerCase()
    }else{
        return c.toUpperCase()
    }
}
console.log([...s].map(e => {
    if(isChar(e)){
        return e + opposite(e)
    }else{
        return e
    }
}).join(''));
