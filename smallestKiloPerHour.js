const N = parseInt(readline());

let arr = []
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const S = parseInt(inputs[0]);
    const D = parseInt(inputs[1]);

    arr.push(Math.round(D * 60 / S))
}


console.log(Math.min(...arr));