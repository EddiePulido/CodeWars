var inputs = readline().split(' ').map(Number)

inputs = [...new Set(inputs.sort((a,b) => a - b))]

let count = 1
let bool = false

for(let i = 1; i < inputs.length; i++){
    if(inputs[i] - inputs[i-1] == 1) count++
    else count = 0

    if(count == 4) bool = true
}

print(bool)