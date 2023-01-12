let h = 0
let l = 0

const N = parseInt(readline());
var inputs = readline().split(' ');
let last = inputs[0]
for (let i = 1; i < N; i++) {
    const H = parseInt(inputs[i])
    if(H > last) h++
    if(H <= last) l++
    last = H
}

print(h + ' ' + l)
