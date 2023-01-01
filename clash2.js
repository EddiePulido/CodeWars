/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());

let s = []

for(let i = 1; i <= 10; i++){
    s.push(N * i)
}

console.log(s.join(' '));
