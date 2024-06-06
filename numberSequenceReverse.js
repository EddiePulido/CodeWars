
var inputs = readline().split(' ');
const N = parseInt(inputs[0]);
const R = parseInt(inputs[1]);

const arr = []
let s = 1
for(let i = 0; i < N; i++){
    arr.push(s)
    s *= R
}

console.log(arr.join(' '))
