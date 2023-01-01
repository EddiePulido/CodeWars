/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());
let c = 0
for (let i = 0; i < n; i++) {
    const line = readline().split(' ')
    let range = line[0].split('-')
    let min = range[0]
    let max = range[1]
    let l = line[1][0]
    let count = line[2].split('').filter(e => e === l).length

    if(count >= min && count <= max) c++
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(c);
