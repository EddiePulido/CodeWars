const num = parseInt(readline());
const s = readline();

if(num % 2){
    console.log([...s].reverse().join(''))
}else{
    console.log(s)
}