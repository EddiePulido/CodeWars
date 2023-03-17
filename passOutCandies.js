const n = parseInt(readline());

let sum = 0
let candies = 1

for(let i = 0; i < n; i++){
    sum += candies
    candies += 2
}

print(Math.ceil(sum / 10))
