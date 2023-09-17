let n = parseInt(readline());

let arr = [n]

while(n !== 1){
    if(n % 2){
        n = n * 3 + 1
    }else{
        n = n / 2
    }

    arr.push(n)
}

console.log(arr.join(' '))
