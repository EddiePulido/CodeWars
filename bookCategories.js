r=readline
c=r()
n=+r()
s=0
for(i=0;i<n;i++)s+=+(r().slice(0,c.length)==c)
print(s)