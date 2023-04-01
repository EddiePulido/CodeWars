/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());
const a = readline().split(' ').map(e => +Math.abs(+e).toString().split('').reverse().join(''))

print(Math.max(...a))