const N = parseInt(readline());



for (let i = 0; i < N; i++) {
    const map = {
        w : 1,
        i : 1,
        z : 1,
        a : 1,
        r : 1,
        d : 1
    }
    const names = readline().toLowerCase();

    [...names].forEach(c => {
        if(map[c]){
            map[c]--
        }
    })

    Object.values(map).every(e => e <= 0) ? print('Is a wizard') : print('Not a wizard') 
}

