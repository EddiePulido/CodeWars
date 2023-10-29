const n = parseInt(readline());
const c = readline();
let s = ''
let j = 0
for(let i = 0; i < n*2; i++){
    if(i % 2 === 0){
        s += '-'
    }else{
        s += c[j%c.length]
        j++
    }
}

console.log(s+'-')