const num = parseInt(readline());
const isChar = c => c.toLowerCase() != c.toUpperCase()

const hasLower = s => [...s].some(c => isChar(c) && c == c.toLowerCase())
const hasUpper = s => [...s].some(c => isChar(c) && c == c.toUpperCase())
let nums = '0123456789'

for (let i = 0; i < num; i++) {
    const password = readline();
    let reasons = []
    if(password.length < 15){
        reasons.push('1')
    }
    if(!hasLower(password) || !hasUpper(password)){
        reasons.push('2')
    }
    if([...password].filter(e => nums.includes(e)).length <= 5){
        reasons.push('3')
    }
    
    if(reasons.length == 0) print('PERFECT')
    else print('BAD ' + reasons.join(' '))
}

