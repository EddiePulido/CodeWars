const n = parseInt(readline());

const arr = []
for (let i = 0; i < n; i++) {
    const xup = readline()
    arr.push(xup)
}

let max = Math.max(...arr.map(e => e.length))
for (let i = 0; i < n; i++) {
    const word = arr[i]

    console.log(' '.repeat(max - word.length) + [...word].reverse().join('').trim())
}
