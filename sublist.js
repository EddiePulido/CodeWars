

const N = parseInt(readline());
let set = new Set()
for (let i = 0; i < N; i++) {
    const X = parseInt(readline());
    set.add(X)
}

set.forEach(num => {
    console.log(num)
})
