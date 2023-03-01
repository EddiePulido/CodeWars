/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
let sum = 0
const numCount = parseInt(readline());
var inputs = readline().split(' ');
for (let i = 0; i < numCount; i++) {
    const number = parseInt(inputs[i]);
}
const indexCount = parseInt(readline());
var ids = readline().split(' ');
for (let i = 0; i < indexCount; i++) {
    const index = parseInt(ids[i]);
    sum += +inputs[index]
}


console.log(sum)
