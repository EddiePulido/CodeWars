n=+readline()
a=0,b=0,c=0
for(i=1;i<=n;i++){d=i%7==0
e=i%10==7
f=d&&e
f?c++:d?a++:e?b++:''}
print(`${a}\n${b}\n${c}`)