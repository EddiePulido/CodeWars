const s = readline()
const bool = s.length % 2 === 0
up = s => s.toUpperCase()
low = s => s.toLowerCase()
console.log([...s].map((c,i) => {
    if(bool){
        return i % 2 ? low(c) : up(c)
    }else{
        return i % 2 ? up(c) : low(c)
    }
}).join(''))