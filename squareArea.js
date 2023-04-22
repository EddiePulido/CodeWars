const n = parseInt(readline());

let r = 0
let max = 0

for (let i = 0; i < n; i++) {
    const line = readline().split('')

    const s = line.filter(e => e === '#').length
    max = Math.max(max, s)

    if(line.some(e => e === '#')) r++
}



console.log(max * r);
