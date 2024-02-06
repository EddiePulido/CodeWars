const n = parseInt(readline());
var inputs = readline().split(' ');
const arr = []
for (let i = 0; i < n; i++) {
    const distance = parseInt(inputs[i]);
    arr.push(distance)
}

for(let i = 0; i < n-1; i++){
    const dist = Math.abs(arr[i] - arr[i+1])
    if(dist > 500) print(dist)
}
