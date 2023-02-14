const S = readline().toLowerCase()
const text = readline().toLowerCase()

let count = 0

for(c of text.split(' ')){
    if(c.includes(S)){
        count++
    }
}

print(count)
