/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const A = readline();
const B = readline();
const L = parseInt(readline());
const PROG = parseFloat(readline());


let x = Math.ceil(L * PROG)

console.log(A.repeat(x) + B.repeat(L - x))