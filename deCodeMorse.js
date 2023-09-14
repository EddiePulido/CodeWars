const msg = readline();
const n = parseInt(readline());

let map = {}
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const ch = inputs[0];
    const morse = inputs[1];

    map[morse] = ch
}

map['/'] = ' '


console.log(msg.split(' ').map(e => map[e] || '[]').join(''))

