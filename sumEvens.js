const n = parseInt(readline());
var inputs = readline().split(' ');
print(inputs.reduce((a,c) => c % 2 ? a : a + +c, 0))
