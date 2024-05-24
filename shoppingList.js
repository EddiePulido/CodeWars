const max = parseInt(readline());
const sList = readline().split(',')
const N = parseInt(readline());

let t = 0

for (let i = 0; i < N; i++) {
    const [item, price] = readline().split(',')
    if(sList.includes(item)) t += +price
}


if(max >= t){
    console.log(true)
    console.log(max - t)
}else{
    console.log(false)
    console.log(t - max)
}

