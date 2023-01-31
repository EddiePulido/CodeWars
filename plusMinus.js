r=readline
n=+r()
s=r()
m={'++':-1,'+-':1,'-+':1,'--':-1}
c=0
for(i=0;i<n-1;i++)c+=m[s[i]+s[i+1]]
print(c)