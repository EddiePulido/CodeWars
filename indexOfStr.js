const length = parseInt(readline());
var inputs = readline().split(' ');

const arr1 = []
const arr2 = []

for (let i = 0; i < length; i++) {
    const part1 = inputs[i];
    arr1.push(part1)
}
var inputs = readline().split(' ');
for (let i = 0; i < length; i++) {
    const part2 = inputs[i];
    arr2.push(part2)
}


for(e of arr1){
    let index = arr2.indexOf(e)
    arr2[index] = 'NOTHING'
    console.log(index === -1 ? 'NONE' : index)
}