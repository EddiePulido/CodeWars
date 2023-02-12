const s = readline();
const isChar = c => c.toLowerCase() != c.toUpperCase()

let up = 0
let low = 0

for(c of s){
    if(isChar(c)){
        if(c.toUpperCase() === c) up++
        else low++
    }
}

print(Math.abs(up-low))