const N = parseInt(readline());


const arr = []

for(let i = 1; i <= N; i++){
    if(N % i === 0) arr.push(i)
}

print(arr.length == 1 || arr.length > 2 ? arr.length : 'PRIME')