/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());

let m = n.toString(16).toUpperCase()

m = m.replaceAll('0', 'O')

print(m)