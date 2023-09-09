const key = readline().toLowerCase()
const n = parseInt(readline());


for (let i = 0; i < n; i++) {
    const str = readline().toLowerCase()
    let error = 0

    for(let j = 0; j < key.length; j++){
        if(key[j] !== str[j]) error++
    }
    const percent = (key.length - error) * 100 / key.length 

    console.log(percent >= 90 ? 'pass' : 'fail')
}


