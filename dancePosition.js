const n = parseInt(readline());
var inputs = readline().split(' ');

// print(inputs)

let x = 0
let y = 0

let map = {
    'boom': 1,
    'ts' : -1,
    'ding' : -1,
    'bing' : 1
}

const inRangeX = x => x >= 0 && x < 31
const inRangeY = y => y >= 0 && y < 11

for (let i = 0; i < n; i++) {
    const s = inputs[i];
    if(['boom','ts'].includes(s)){
        x += map[s]
        if(!inRangeX(x)) x -= map[s]
    } 
    else{
        y += map[s]
        if(!inRangeY(y)) y -= map[s]
    }
  
}



print(x + ' ' + y)