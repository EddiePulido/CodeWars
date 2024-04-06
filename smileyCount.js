const smiley = readline();

const c = [...smiley].reduce((a,c) => a + +(c == ':'), 0)
const s = [...smiley].reduce((a,c) => a + +(c == ')' || c == '('), 0)



print(s !== c ? 'Oh no!' : ':)'.repeat(c))