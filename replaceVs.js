let m = readline();

let result = ''

for(let i = 0; i < m.length; i ++){
    if(m[i] === 'v'){
        result += 'w'
        while(m[i] == 'v'){
            i++
        }
        i--
    }else{
        result += m[i]
    }
}

console.log(result);
