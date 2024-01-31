const count = parseInt(readline());
var inputs = readline().split(' ');
let output = 0
for (let i = 0; i < count; i++) {
    const number = parseInt(inputs[i]);

    output = number % 2 ? output * number : output + number
}

print(output)

