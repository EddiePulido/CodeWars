const n = parseInt(readline());
let a = []
for (let i = 0; i < n; i++) {
    const mot = readline();
    if(mot !== [...mot].reverse().join('')){
        a.push(mot)
    }
}

for(w of a){
    console.log(w)
}

console.log(n-a.length)