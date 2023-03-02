/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const _byte = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log([..._byte].filter(e => e == 1).length * 2);
