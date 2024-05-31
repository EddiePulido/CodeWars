const n = parseInt(readline());
const text = readline();

let words = []

let curr = ''

const f = c => c.toUpperCase() !== c.toLowerCase()

for(let i = 0; i < n; i++){
    const c = text[i]
    if(f(c)){
        curr += c
    }else{
        if(curr) words.push(curr)
        curr = ''

    }
}

if(curr) words.push(curr)

let min = Infinity
let word = ''

for(w of words){
    if(w.length < min){
        min = w.length
        word = w
    }
}

console.log(word)