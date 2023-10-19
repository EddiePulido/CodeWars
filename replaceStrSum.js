const s = readline();
const N = parseInt(readline());

let y = ''
for (let i = 0; i < N; i++) {
   let x = readline();
    x = x.replace(s,'')
    y+= x
}


console.log(y);
