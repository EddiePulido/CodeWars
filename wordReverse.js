const word = readline();

let i = 0;
let j = word.length - 1

let arr = []

while( i < j){
    arr.push(word[i++] + word[j--])
}

console.log(arr.join(''))

