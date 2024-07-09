const n = parseInt(readline());

let i = n - 1
let j = n + 1

const isPal = n => {
    const s = n.toString()

    return s === [...s].reverse().join('')
}


while(!isPal(i) && !isPal(j)){
    i--
    j++
}

if(isPal(i)){
    console.log(i)
}else{
    console.log(j)
}

