const N = parseInt(readline());
let arr = []
const set = new Set()

for (let i = 0; i < N; i++) {
    const S = readline();
    arr.push(S)
}

const change = (a,b) => {
    let changes = 0
    if(a.length !== b.length) return false

    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]) changes++
    }

    if(set.has(b)) return false

    set.add(b)
    return changes === 1
}

console.log(arr.length < 2 ? false : arr.every((e,i) => i === 0 || change(e,arr[i-1])))