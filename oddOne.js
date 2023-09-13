const length = parseInt(readline());
var inputs = readline().split(' ');

let counts = {}
for (let i = 0; i < length; i++) {
    const num = parseInt(inputs[i]);
    counts[num] = ++counts[num] || 1
}

let num = 0

for(key in counts){
    if(counts[key] % 2){
        num = key
    }
}

print(num)