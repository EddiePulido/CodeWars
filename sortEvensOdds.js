const N = parseInt(readline());
var inputs = readline().split(' ');
const arr = []
for (let i = 0; i < N; i++) {
    const element = parseFloat(inputs[i]);
    arr.push(element)
}


const evens = arr.filter(e => e % 2 === 0).sort((a,b) => a - b)
const odds = arr.filter(e => e % 2).sort((a,b) => a - b)

const result = evens.concat(odds)

print(result.join(' '))
