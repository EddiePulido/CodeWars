const line = readline();
const n = parseInt(readline());

const m = {
    s: (n * n).toFixed(1),
    sr: (n ** .5).toFixed(1)
}

console.log(m[line]); 
  