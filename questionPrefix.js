let arr = []
const q= readline();
const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    const ROW = readline();
    if(ROW.slice(0,q.length) === q) arr.push(ROW)
}

for(e of arr){
    print(e)
}

if(!arr.length) print("EMPTY")