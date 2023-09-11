const numPurses = parseInt(readline());
let max = 0
let c = ""

for (let i = 0; i < numPurses; i++) {
    const purse = readline();
    let index = purse.indexOf('contains')

    let arr = purse.slice(index+9).split(', ')
    let color = purse.split(' ')[1]

    let sum = arr.reduce((a,c) => a + +c, 0)

    if(sum > max){
        max = sum
        c = color
    }
}

console.log(c)