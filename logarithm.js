const N = parseInt(readline());
const P = parseInt(readline());

let num = 0

while(P ** num <= N){
    num++
}

print(num-1)