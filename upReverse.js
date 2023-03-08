/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const S = readline();

const isChar = c => c.toLowerCase() != c.toUpperCase()

let up = [...S].filter(e => isChar(e) && e === e.toUpperCase()).reverse().join('')

console.log(up || '...');
