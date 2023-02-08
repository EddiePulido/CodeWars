const textInput = readline().split(' ')

let map = {
    hundred: 100,
    thousand: 1000,
    million: 1000000,
}

console.log(+textInput[0] * map[textInput[1]])
