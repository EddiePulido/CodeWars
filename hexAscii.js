const n = parseInt(readline());

let arr = []
for (let i = 0; i < n; i++) {
    const c = readline();
    arr.push(String.fromCharCode(parseInt(c,16)))

}

print(arr.join(''))
