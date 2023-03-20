const N = parseInt(readline());
let start = 0
let end = N - 1
for (let i = 0; i < N; i++) {
    let arr = new Array(N).fill(0)
    print(arr.map((e,i) => {
        if(i === start || i === end){
            return 'x'
        }

        return '#'
    }).join(''))
    start++
    end--
}
