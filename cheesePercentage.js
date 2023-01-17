const n = parseInt(readline());
let count = 0
for (let i = 0; i < n; i++) {
    
    const line = readline();
    count += [...line].filter(e => e == '*').length
}

console.log((Math.floor(((count) / (n*n)) * 100) || 0) + '%');
