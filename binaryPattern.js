const N = parseInt(readline())
let s = 0

if(N % 2) s = 1

for(let i = 0; i < N; i++){
    let result = ''
    for(let j = 0; j < N; j++){
        result += s
        s == 1 ? s = 0 : s = 1
    }
    if(N % 2 === 0) s == 1 ? s = 0 : s = 1
    console.log(result)
  }