const s = readline();
const mirror = readline();
const rev = [...s].reverse().join('')

if(mirror === '|'){
    console.log(rev)
}
if(mirror === '\\'){
    for(let i = 0; i < s.length; i++){
        console.log('.'.repeat(s.length - i - 1) + rev[i])
    }
}

if(mirror === '/'){
    for(let i = 0; i < s.length; i++){
        console.log('.'.repeat(i) + rev[i])
    }
}
