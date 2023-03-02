const N = parseInt(readline());
let arr= []
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const name = inputs[0];
    const PA = parseInt(inputs[1]);
    const S = parseInt(inputs[2]);
    const D = parseInt(inputs[3]);
    const T = parseInt(inputs[4]);
    const HR = parseInt(inputs[5]);
    const W = parseInt(inputs[6]);
    const HBP = parseInt(inputs[7]);
    const SAC = parseInt(inputs[8]);

    let result = ((S + D + T + HR) / (PA - W - HBP - SAC)).toFixed(3)
    arr.push([name, result])
}

arr.sort((a,b) => b[1] - a[1])

arr = arr.map(e => e[0] + ' ' + e[1].slice(1))

for(e of arr){
    print(e)
}
