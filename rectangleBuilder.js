var inputs = readline().split(' ');
const HEIGHT = parseInt(inputs[0]);
const WIDTH = parseInt(inputs[1]);
var inputs = readline().split(' ');
const C = inputs[0];
const CV = inputs[1];
const CH = inputs[2];

for(let i = 1; i <= HEIGHT; i++){
    if(i === 1 || i === HEIGHT){
        print(C + CH.repeat(WIDTH - 2) + C)
    }else{
        print(CV + ' '.repeat(WIDTH - 2) + CV)
    }
}

