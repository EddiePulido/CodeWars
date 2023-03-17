const n = parseInt(readline());

let map = {
    'EARTH' : 'FIRE',
    'FIRE' : 'WATER',
    'WATER' : 'EARTH'
}

for (let i = 0; i < n; i++) {
    const e = readline().split(' ')
    if(e[0] === 'FRIEND'){
        print('HEAL ' + e[1])
    }else{
        print("ATTACK " + map[e[1]])
    }
}

