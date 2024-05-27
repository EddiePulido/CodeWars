let min = Infinity

const map = {}

for (let i = 0; i < 10; i++) {
    const [name, ...scores] = readline().split(' ')
    // console.log({name, scores})
    map[name] = scores.reduce((a,c) => a + +c, 0)
}

const arr = Object.keys(map).sort((a,b) => map[a] - map[b])

for (let i = 0; i < 10; i++) {
    console.log(arr[i])
}
