let a = parseInt(readline());
const b = parseInt(readline());
const c = parseInt(readline());
const d = parseInt(readline());





for(let i = 0; i < d; i++){
    let arr = []
    for(let j = 0; j < c; j++){
        arr.push(a)
        a += b
    }
    print(arr.join(' '))
}

