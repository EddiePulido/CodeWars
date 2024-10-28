const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const a = parseInt(inputs[0]);
    const b = parseInt(inputs[1]);

    let sumOfS = a ** 2 + b ** 2
    let squareOfS = (a + b) ** 2

    if(sumOfS > squareOfS){
        print('>')
    }else if(sumOfS < squareOfS){
        print('<')
    }else{
        print('=')
    } 
}

 