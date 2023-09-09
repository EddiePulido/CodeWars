const w = readline();
const r = [...w].reverse().join('')
const c = readline();

const arr = []
if(c === 'S'){
    for(let i = 0; i < w.length; i++){
        if(i % 2 === 0){
            arr.push(w)
        }else{
            arr.push(r)
        }
    }

    console.log(arr.join(' '))
}else{
    for(let i = 0; i < w.length; i++){
        i % 2 ? console.log(r) : console.log(w)
    }
}

