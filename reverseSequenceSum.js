const m = parseInt(readline());
s = 0
for (let i = 0; i < m; i++) {
    const line = readline().split(' ').map(Number)

    s += line.reduce((a,c) => a * c, 1)
}


console.log(s);
