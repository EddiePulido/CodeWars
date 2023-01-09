const N = parseInt(readline());

let arr = []

for (let i = 0; i < N; i++) {
    const input = readline()

    if(input.split(' ').reduce((a,c) => a + +c, 0) % 2 === 0){
        arr.push(input)
    }
}

if(arr.length == 0) print(0)
else{
   print( arr.join(' '))
}
