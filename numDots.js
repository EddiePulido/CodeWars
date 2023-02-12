const lenT = parseInt(readline());
var inputs = readline().split(' ');

let s = ''
for (let i = 0; i < lenT; i++) {
    const x = parseInt(inputs[i]);
    i == lenT -1 ? s += x + '': s += x + '.'.repeat(x)
}



console.log(s)
