const faces = readline()
let arr = faces.split(' ')

let happy = ['=)', '^_^']
let sad = [':(', '>_<']

console.log(arr.reduce((a,c) => happy.includes(c) ? a + 1 : a - 1, 0))