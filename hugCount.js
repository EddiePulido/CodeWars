
const n = parseInt(readline());
var inputs = readline().split(' ');
let count = 0
for (let i = 0; i < n; i++) {
    const duration = parseFloat(inputs[i]);
    if(duration >= 5) count++
}

if(count > 11){
    print('Thriving!')
}else if(count > 7){
    print('Stable.')
}else if(count > 3){
    print('Surviving!')
}else{
    print('Struggling!')
}
print(4-count)

