r=readline
var [a,b]=r().split(' ')
n=+r()
c=[+a,+b]
for(i=0;i<n;i++)c.push(c[i]+c[i+1])
print(c[n-1])