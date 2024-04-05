r=readline,n=+r(),m={},a=[]
for(i=0;i<n;i++)for(x of r().split(';'))m[x]=++m[x]||1
for(k in m)if(m[k]==n)a.push(k)
print(a.length!=1?'Catfish Alert!':a[0])