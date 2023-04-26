const n = parseInt(readline());
var inputs = readline().split(' ');

let sum = 0
for (let i = 0; i < n; i++) {
    const x = parseInt(inputs[i])

    if(inputs[i+1]){
        sum += (x - inputs[i + 1]) ** 2
    }
}

print(sum)