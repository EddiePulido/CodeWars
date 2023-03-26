const S = readline();
const N = parseInt(readline());

let arr = []

for(let i = 0; i < S.length; i+=N){
    arr.push(S.slice(i,i+N))
}
console.log(arr.join('-'));
