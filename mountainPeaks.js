const n = parseInt(readline());
let str = ''
for (let i = 0; i < n; i++) {
    const line = readline();
    str += line
}

let i = 0

while(str.includes('/\\')){
    str = str.replace('/\\', '')
    i++
} 

console.log(i);
