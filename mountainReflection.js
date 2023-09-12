const height = parseInt(readline());

const arr = []
let max = 0

for (let i = 0; i < height; i++) {
    const row = readline();
    console.log(row)
    max = Math.max(row.length, max)
    arr.unshift(row.toLowerCase())
}

console.log('~'.repeat(max))

for(row of arr){
    console.log(row)
}