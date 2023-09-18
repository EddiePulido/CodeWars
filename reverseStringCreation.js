const s = [...readline()].reverse()
const f = readline()

let r = ""

for(c of f){
    if(c === 'X'){
        r += s.pop().toUpperCase()
    }
    else if(c === 'x'){
        r += s.pop().toLowerCase()
    }
    else{
        r += c
    }
}

console.log(r)