

const n = parseInt(readline());
var inputs = readline().split(' ');

let max = 0

for (let i = 0; i < n; i++) {
    const j = parseInt(inputs[i]);

    if(j % 2) max = Math.max(max, j)
}



console.log(max);
