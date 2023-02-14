const N = parseInt(readline());

let map = {
    'BrownGreen' : 'Brown',
    'GreenBrown' : 'Brown',
}

for (let i = 1; i <= N; i++) {
    var inputs = readline().split(' ');
    const p1 = inputs[0];
    const p2 = inputs[1];

    if(p1 === p2) print(p1)
    else{
        if(map[p1+p2]) print(map[p1+p2])
        else{
            if(i % 2){
                print(p1)
            }else{
                print(p2)
            }
        }
    }
}

