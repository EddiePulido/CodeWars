r=readline
m=+r()
n=+r()
d=n=>{a=[]
for(i=1;i<n;i++)if(n%i==0)a.push(i)
return a.reduce((b,c)=>b+c)}
r=x=>x<100||x>100000
print(m==n||r(n)||r(m)?'Invalid':d(n)==m&&d(m)==n?'Yes':'No')