let arr = []
for (let i = 0; i < 4; i++) {
    const [q,d] = readline().split(' ')
    arr.push([q, +d])
}

arr.sort((a,b) => b[1] - a[1])

for([q,d] of arr){
    if(d === 0){
        console.log(`${q}|0`)
    }else{
        console.log(`${q}|${'#'.repeat(d/100 * 2)} ${d}`)
    }
}