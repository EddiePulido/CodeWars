const student = readline();
const questionAmount = parseInt(readline());
let count = 0
for (let i = 0; i < questionAmount; i++) {
    let question = readline();
    question = question.replace('=', '==')
    question = question.replace('x', '*')

    count += +(eval(question))
}

console.log(`${student} got ${count} / ${questionAmount}`)