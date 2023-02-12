
const s = readline();
let lower = true
let a = 'abcdefghijklmnopqrstuvwxyz'

let x = ''

for(c of s){
    if(!a.includes(c.toLowerCase())) x += c
    else if(lower){
        x += c.toLowerCase()
        lower = !lower
    }else{
        x += c.toUpperCase()
        lower = !lower
    }
}

console.log(x);
