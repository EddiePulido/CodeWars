const s = readline();

const arr = []

let curr = ''

for(let i = 0; i < s.length; i++){

    curr += s[i]


    if(s[i+1] !== s[i]){
        arr.push(curr)
        curr = ''
    }
}

print(arr.join(' '))