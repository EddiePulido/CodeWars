const N = parseInt(readline());
let arr = []

const calc = (a,b,c) => a * b + c

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const a = parseInt(inputs[0]);
    const b = parseInt(inputs[1]);
    const c = parseInt(inputs[2]);

    arr.push([[a,b,c], calc(a,b,c)])
}

arr = arr.sort((a,b) => a[1] - b[1]).map(e => e[0])

for(ar of arr){
    console.log(ar.join(' '))
}