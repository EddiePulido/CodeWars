var inputs = readline().split(' ');
const a = parseInt(inputs[0]);
const b = parseInt(inputs[1]);

const div = n => {
    let arr = []

    for(let i = 1; i <= n / 2; i++){
        if(n % i === 0) arr.push(i)
    }

    return arr.reduce((a,c) => a + c, 0)
}

print(a === div(b) && b === div(a) ? 'Amicable' : 'Not amicable')