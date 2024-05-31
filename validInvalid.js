const n = parseInt(readline());
const l = new Set(readline())
var inputs = readline().split(' ');


for (let i = 0; i < n; i++) {
    const word = inputs[i];
    if([...word].every(c => l.has(c))){
        console.log(`"${word}" is valid.`)
    }else{
        console.log(`"${word}" is invalid.`)
    }
}


