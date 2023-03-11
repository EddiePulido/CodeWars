var inputs = readline().split(' ');
const a = inputs[0]
const b = inputs[1]

let str = ''

for(let i = 0; i < a.length; i++){
    str += Math.abs(+a[i] - +b[i])
}

console.log(+str);