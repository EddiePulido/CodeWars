const n = parseInt(readline());
var inputs = readline().split(' ');

let s = ''
for (let i = 0; i < n; i++) {
    const number = inputs[i]
    s+=number
}

print([...s].reduce((a,c) => a + +c, 0))
