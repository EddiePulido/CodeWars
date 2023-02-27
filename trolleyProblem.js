const N = parseInt(readline()); // The numbers of paths the train can take
let arr = []
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const Q = parseInt(inputs[0]); // The number of persons on the path
    const V = parseInt(inputs[1]); // The individual value of each person on the path
    arr.push(Q * V)
}

console.log(arr.indexOf(Math.min(...arr)) + 1);
