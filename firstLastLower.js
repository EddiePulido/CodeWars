const message = readline();

const isChar = c => c.toLowerCase() != c.toUpperCase()

let f = ''
let l = ''

for(c of message){
    if(isChar(c) && c.toLowerCase() === c){
        f = c
        break
    }
}

for(let i = message.length -1 ; i >= 0; i--){
    let c = message[i]
    if(isChar(c) && c.toLowerCase() === c){
        l = c
        break
    }
}
console.log(f+'-'+l);
