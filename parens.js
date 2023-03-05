const S = readline();

let stack = []
let bool = true

for(c of S){
    if(c === '('){
        stack.push('(')
    }else if( c === ')'){
        if(stack.length){
            stack.pop()
            
        }else{
            bool = false
            break
        }
    }
}

print(bool && !stack.length)