
const C = readline().split(' ')

const map = {
    Rise : 2,
    Sink : -1,
    Fall : -2,
    Leap : 1
}


print(C.reduce((a,c) => {
    if(c === 'Reset'){
        return 0
    }

    return a + map[c]
}, 0))