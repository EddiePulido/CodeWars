const line = readline();

const valid = s => {
    let n = '1234567890-'
    for(c of s) if(!n.includes(c)) return false

    for(let i = 0; i < s.length; i++){
        if(s[i] === '-' && s[i+1] !== '1') return false
    }

    return true
}

if(!valid(line)){
    print('INVALID')
}else{
    let count = 0
    let maxCount = 0

    for(let i = 0; i < line.length; i++){

        
        if(line[i] == '-'){
            count = 0
            i++
        }else{
            count++
            maxCount = Math.max(count,maxCount)

        }
    }
    print(maxCount)
}
