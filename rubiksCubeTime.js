var inputs = readline().split(' ');
let dnf = 0

let arr = []

for (let i = 0; i < 5; i++) {
    const time = inputs[i];
    if(time != 'DNF'){
        arr.push(+time)

    }else{
        arr.push(0)
        dnf++
    }
}



arr.sort((a,b) => a - b)

if(dnf === 1){
    arr= arr.slice(2)
}else{
    arr = arr.slice(1,-1)
}



const total = arr.reduce((a,c) => a + c, 0)
if(dnf < 2){
    console.log((total / (arr.length)).toFixed(2))
}else{
    console.log('DNF')
}