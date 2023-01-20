/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const N = parseInt(inputs[0]);
const M = parseInt(inputs[1]);
const S = parseInt(readline());

let blocks = 0
for (let i = 0; i < N; i++) {
    const row = readline();

    blocks += [...row].filter(e => e == 'o').length * S
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(blocks);
