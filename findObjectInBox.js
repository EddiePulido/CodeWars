const n = parseInt(readline());
let x = ''
let result = ''
for (let i = 0; i < n; i++) {
    const b = readline();
    if(i === 0 || i === n-1){
        x = [...(new Set(b))][0]
    }

    let y = [...b].find(e => e !== x & e !== ' ')
    if(y) result = y
}



console.log(result);
