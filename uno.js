const n = parseInt(readline());

let arr = []
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const v = parseInt(inputs[0]);
    const c = inputs[1];

    arr.push([v,c])
}


let bool = true
let count = 0

for(let i =1; i < arr.length; i++){
    const [pNum, pCard] = arr[i - 1]
    const [cNum, cCard] = arr[i]

    if(pNum !== cNum && pCard !== cCard){
        bool = false
        count++
    }
}

print(bool ? "Correct" : "Incorrect" + ":" + count)