var inputs = readline().split(' ');
const a = parseInt(inputs[0]);
const b = parseInt(inputs[1]);

let min = Math.min(a,b)
let s = 0
for(let i = min; i >= 1; i--){
    if(a % i == 0 && b % i == 0){
        s = i
        break;
    }
}

print(s)
