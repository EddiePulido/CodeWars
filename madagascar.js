r=readline
n=+r()
f=c=>c.toUpperCase()!=c.toLowerCase()
for(i=0;i<n;i++)print([...r()].every(e=>f(e)&&e==e.toUpperCase())?"VALID":"INVALID")