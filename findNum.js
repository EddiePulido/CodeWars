const a = parseInt(readline());
const b = parseInt(readline());
const c = parseInt(readline());

let result = 0

for(let i = 0; i <= 100; i++){
    if(i % 3 === a && i % 5 === b && i % 7 === c){
        result = i
    }
}

console.log(result)
