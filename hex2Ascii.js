const valueCount = parseInt(readline());
var inputs = readline().split(' ');
let arr = []
for (let i = 0; i < valueCount; i++) {
    const value = inputs[i];

    arr.push(String.fromCharCode(parseInt(value,16)))
}



console.log(arr.join(''));
