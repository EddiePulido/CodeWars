const textInput = readline().split(' ')

const map = {
    thousand: 1000,
    hundred: 100,
    million: 1000000,
}

print(textInput[0] * map[textInput[1]])

