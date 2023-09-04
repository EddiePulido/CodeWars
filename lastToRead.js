r=readline
a=r().split(' ')
N=+a[0]
P=+a[1]
b=r().split(' ')
console.log(P%N?b[P%N-1]:b.pop())