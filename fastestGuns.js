r=readline
n=+r()
a=[]
for(i=0;i<n;i++){s=r().split(' ')
p=+s.slice(-1)[0]
if(p >= 0)a.push([s.slice(0,-1).join(' '),p])}
a.sort((l,k)=>l[1]-k[1])
for(c of a)print(c[0])
if(!a.length)print('NONE')