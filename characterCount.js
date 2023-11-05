r=readline
c=r()
n=+r()
l=0
for(i=0;i<n;i++)l+=[...readline()].reduce((a,d)=>a+ +(d==c),0)
print(l)