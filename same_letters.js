var inputs = readline().split(' ');
const S1 = inputs[0].split('').sort().join('')
const S2 = inputs[1].split('').sort().join('')

print(S1 === S2 ? 1 : 0)