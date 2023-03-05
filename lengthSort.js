const n = parseInt(readline());

let arr = []
for (let i = 0; i < n; i++) {
    const word = readline();
    arr.push(word)
}

arr.sort((a,b) => a.length - b.length)

for(c of arr){
    print(c)
}