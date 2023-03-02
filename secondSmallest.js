const n = parseInt(readline());
var inputs = readline().split(' ')
let arr = []
for (let i = 0; i < n; i++) {
    const num = parseInt(inputs[i]);
    arr.push(num)
}

arr.sort((a,b) => a - b)

print(arr[1])
