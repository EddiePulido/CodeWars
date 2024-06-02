n=+readline()
p=1
while(p<=n)p*=2
s=[]
while(n>0){if(n>=p)(n-=p,s.push(p));p/=2}
print(s.sort((a,b)=>a-b).join(" "))