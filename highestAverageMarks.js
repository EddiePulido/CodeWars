const numberofpeople = parseInt(readline());

let max = 0
let maxGuy = ''
let err = false
let errName = ''

for (let i = 0; i < numberofpeople; i++) {
    const [p, ...scores] = readline().split(',')

    // console.log({p, scores})
    const avg = scores.reduce((a,c) => a + +c, 0) / scores.length

    if(scores.some(e => +e < 0 || +e > 20)){
        err = true
        errName = p
    }

    if(avg > max){
        max = avg
        maxGuy = p
    }
}

console.log(err ? `Problem with marks of: ${errName}` : maxGuy + ',' + max.toFixed(1))