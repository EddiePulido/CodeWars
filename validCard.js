r=readline
n=r()
v=d=>[...d.slice(0,-1)].reduce((a,c,i)=>a+ +c*(i+1),0)%10==d.slice(-1)
for(i=0;i<n;i++){N=r().replace(/\s/g,'')
if(N.length!=13)print('Invalid')
else print(v(N)?'Valid':'Invalid')}