const N = parseInt(readline());
let s = 0
for (let i = 0; i < N; i++) {
    const x = parseInt(readline());
    s += x
}

console.log((s+'').length === new Set((s+'')).size ? "True" : "False")
