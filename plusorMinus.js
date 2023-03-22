const l = readline().split(' ')

print(l.reduce((a,c) => +c % 2 ? a + +c : a - +c , 0))