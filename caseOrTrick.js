const c = readline().toLowerCase()
let n = parseInt(readline());
let alpha = 'abcdefghijklmnopqrstuvwxyz'
if(c == 'upper') alpha = alpha.toUpperCase()
if(n > 26){
    print('ERROR')
}else{

    let arr = []
    let i = 0
    while(n--){
        arr.push(alpha[i++])
    }
    
    print(arr.join(' '))
}
