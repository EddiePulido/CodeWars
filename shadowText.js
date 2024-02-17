const s1 = readline().split(' ')
const s2 = readline().split(' ')

let shadow = true

if(s1.length !== s2.length){
    console.log('not the same amount of words in both strings')
    shadow = false
}else{
    if(s1.some((e,i) => e.length !== s2[i].length)){
        console.log('some of the corresponding words not the same length')
        shadow = false
    }else{
        for(let i = 0; i < s1.length; i++){
            let found = false
            for(let j = 0; j < s1[i].length; j++){
                if(s1[i][j] === s2[i][j]){
                    console.log('shared letters in corresponding words')
                    shadow = false
                    found = true
                    break;
                }
            }
            if(found) break;
        }
    }

    
}

if(shadow){
    console.log('shadow')
}
