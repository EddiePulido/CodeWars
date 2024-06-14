const x = readline();
const n = parseInt(readline());
let count = 0
for (let i = 0; i < n; i++) {
    const y = readline();
    if(y.startsWith(x)) count++
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(count);
