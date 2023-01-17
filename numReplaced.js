let line1 = readline();
let line2 = readline();
line2 = line2.split('').reverse().join('')

let count = 0

for(let i = 0; i < line1.length; i++){
    if(line1[i] != line2[i]) count++
}

print(count)