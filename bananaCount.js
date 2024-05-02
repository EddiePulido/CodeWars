let bananas = parseInt(readline());
const monkeys = readline().split(',').map(Number).sort((a,b) => a - b)
let count = 0


for(mon of monkeys){
    if(bananas - mon >= 0){
        bananas -= mon
        count++
    }

}

console.log(count);