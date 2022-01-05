/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const a = readline().split(' ')

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(a.map(e => String.fromCharCode(+e)).join(''));
