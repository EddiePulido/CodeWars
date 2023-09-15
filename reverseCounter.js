N = parseInt(readline());
let i = 0
let arr = []

if(N === 0){
    console.log('None')
}else{
    if(N > 0){
        i = 1
    }

    while(i <= Math.abs(N)){
        arr.push(i)
        i += 2
    }
    print(arr.join(' '))
}
