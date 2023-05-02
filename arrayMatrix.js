const L = parseInt(readline());
const N = parseInt(readline());

let j = 1



for(let i = 0; i < N; i++){
    const arr = []
    for(let x = 0; x < L;x++){
        arr.push(j++)
    }

    print('['+arr.join(',')+']')
}