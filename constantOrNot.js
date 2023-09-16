const N = parseInt(readline());
var inputs = readline().split(' ');
let diff = inputs[1] - inputs[0]
let constant = true

for (let i = 1; i < N; i++) {
    const u = parseInt(inputs[i]);
    if(u - inputs[i-1] !== diff){
        constant = false
    }
}

console.log(constant ? diff : 'NOT CONSTANT')
