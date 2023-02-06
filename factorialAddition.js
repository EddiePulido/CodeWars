

const n = parseInt(readline());

let p = 1

for(let i = 1; i <= n; i++){
    p *= i
}

for(let i = 1; i <= n; i++){
    p += i
}

print(p)