const N = parseInt(readline());
var inputs = readline().split(' ').map(Number)

const evens = inputs.filter(e => e % 2 === 0)
const odds = inputs.filter(e => e % 2)

evens.sort((a,b) => a - b)

evens.reverse()

for(let i = 0; i < N; i++){
    if(inputs[i] % 2 === 0){
        inputs[i] = evens.pop()
    }
}

console.log(inputs.join(' '))