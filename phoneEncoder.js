const S = readline().toUpperCase()

const map = {}
// print(S)

const arr = [
    'ABC',
    'ABC',
    'ABC',
    'DEF',
    'GHI',
    'JKL',
    'MNO',
    'PQRS',
    'TUV',
    'WXYZ',
]

arr.forEach((e,i) => {
    [...e].forEach(c => {
        map[c] = i
    })
})

for(let i = 2; i<= 9; i++){
    map[i] = '_'
}

print([...S].map(e => map[e] || e).join(''))