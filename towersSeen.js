const N = parseInt(readline());

var inputs = readline().split(' ');
let highest = inputs[0]
let count = 1

// print({inputs})

for (let i = 1; i < N; i++) {
    const tower = parseInt(inputs[i]);
    if(tower > highest){
        count++
        highest = tower
    }
}


console.log(count);
