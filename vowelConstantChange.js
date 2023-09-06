const string = readline();
const isChar = c => c.toUpperCase() !== c.toLowerCase()
const v = 'aeiouAEIOU'

console.log([...string].map(c => {
    if(isChar(c)){
        if(c.toUpperCase() === c){
            return v.includes(c) ? 'V' : 'C'
        }

        return v.includes(c) ? 'v' : 'c'
    }

    return c
}).join(''))