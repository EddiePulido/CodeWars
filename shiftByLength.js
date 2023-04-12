

const M1 = readline();



console.log([...M1].map(e => String.fromCharCode(e.charCodeAt() + M1.length)).join(''))
