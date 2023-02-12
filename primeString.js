const s = readline();

let sum = [...s].reduce((a,c) => a + +c.charCodeAt(), 0)


let bool = false
let char = ''
for(c of s){
    if(sum % c.charCodeAt() === 0){
        bool = true
        char = c
        break;
    }
}

print(bool ? char : 'prime')
