x=readline()
r=s=>[...s].reverse().join('')
while(!(x==r(x)))x=(+x+ +r(x))+''
print(x)