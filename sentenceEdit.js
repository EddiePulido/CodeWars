const sentence = readline().split(' ')
let i = sentence.findIndex(e => e == 'and')

print(sentence.slice(0,i+1).join(' ') + ' ' + sentence.pop())

