/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());
let a = ''
let s = 0
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const name = inputs[0];
    const quantity = parseInt(inputs[1]);
    const price = parseInt(inputs[2]);
    if(quantity / price > s){
        a = name
        s = quantity / price
    }

}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(a);
