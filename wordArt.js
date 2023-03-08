var inputs = readline().split(' ');
const w = inputs[0];
const decor = inputs[1];
const outer = parseInt(inputs[2]);

let len = w.length + 2 + outer * 2

for(let i = 0; i < outer; i++){
    print(decor.repeat(len))
}

print(decor.repeat(outer) + ' ' + w + ' ' + decor.repeat(outer))

for(let i = 0; i < outer; i++){
    print(decor.repeat(len))
}
