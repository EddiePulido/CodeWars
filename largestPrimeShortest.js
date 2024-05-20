r=readline
l=+r()
var i=r().split(' ')
p=n=>{if(n<2)return !!0
for(i=2;i<n;i++)if(n%i==0)return !!0
return !!1}
m=Math.max(...i.filter(p))
print(m>0?m:-1)