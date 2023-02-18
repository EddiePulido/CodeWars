const start = parseInt(readline());

let arr = [1, 1]

for(let i = 2; i < start; i++){
    arr.push(arr[i-1] + arr[i-2])
}

print(arr.reverse().join(' '))