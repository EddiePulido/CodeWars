const inputString = readline();


const arr = [...inputString].sort().join('')

for(let i = 0; i < arr.length; i++){
    let start = arr[i]
    let str = ''

    while(arr[i] === start){
        str += arr[i]
        i++
    }

    console.log(str)
    i--
}
