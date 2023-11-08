const N = parseInt(readline());
let p = 0

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const A = parseInt(inputs[0]);
    const B = parseInt(inputs[1]);

    if(A == p){
        p = B
    }else if(B == p){
        p = A
    }
}

print(p)

