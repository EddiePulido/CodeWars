const A = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
let s = ''

for(c of A){
    if(c.toUpperCase() === c){
        s+= ' '
    }

    s+= c
}
console.log(s[0].toUpperCase() + s.slice(1).toLowerCase());
