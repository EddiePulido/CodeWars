const T = readline()

const open = '[('
const close = '])'

const stack = []

const map = {
    ']' : '[',
    ')' : '('
}

let bool = true

for(const c of T){
    if(open.includes(c)){
        stack.push(c) 
    } 

    if(close.includes(c)){
        if(map[c] !== stack.pop()){
            bool = false
        }
    }
}

console.log(bool && stack.length === 0 ? 'TRUE' : 'FALSE')