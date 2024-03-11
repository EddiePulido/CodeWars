const N = parseInt(readline());

let sum = 0

for(let i = 3; i <= N; i++){
    if(i % 3==0 || i % 5==0) sum+=i
}

console.log(sum)