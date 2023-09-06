const op = readline();

const s = readline().split(' ').map(Number)

const m = parseInt(readline());

if(op === '+'){
    console.log(s.reduce((a,c) => a + c, 0) % m)
}else{
    console.log(s.reduce((a,c) => a * c, 1) % m)
}