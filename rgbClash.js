

const r = parseInt(readline());
const g = parseInt(readline());
const b = parseInt(readline());

let arr = [r.toString(16), g.toString(16), b.toString(16)]

for(let i = 0 ; i < arr.length; i++){
    if(arr[i].length == 1) arr[i] = '0' + arr[i]
}

print('#' + arr.join('').toUpperCase())
