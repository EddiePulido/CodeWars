const N = parseInt(readline());
const m = parseInt(readline());
var inputs = readline().split(' ').map(Number)

let number = 0
let arr = []

for(n of inputs){
    if(n<0){
        arr.push(number)
    }else{
        arr.push(n)
        number = n
    }
}

console.log(arr.join(' '))