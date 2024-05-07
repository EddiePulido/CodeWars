const n = parseInt(readline());
for (let i = 0; i < n; i++) {
    const password = readline();

    let arr = []

    for(let i = 0 ; i < password.length; i += 4){
        arr.push(password.slice(i, i+4))
    }

    console.log(arr.map(n => {
        return String.fromCharCode(parseInt(n, 4))
    }).join(''))
}
