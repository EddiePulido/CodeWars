const N = parseInt(readline());
const percentage = parseInt(readline());

let totalBill = 0
let totalTip = 0
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const bill = parseFloat(inputs[0]);
    const tip = parseFloat(inputs[1]);
    totalBill += bill
    totalTip += tip
}


if(totalTip / totalBill * 100 >=  percentage) {
    print('DRUNK')
}else{
    print('THIRSTY')
}
