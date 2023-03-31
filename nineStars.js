const N = parseInt(readline());
var inputs = readline().split(' ');

for (let i = 1; i <= 9; i++) {
    let star = ''
    if(inputs.includes(i +'')){
        star = '*'.repeat(inputs.reduce((a,c) => i == c ? ++a : a, 0))
    }

    print(i + ':' + star)
}


