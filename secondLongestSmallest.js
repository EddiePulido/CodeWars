r=readline
r()
m=r().split(' ').map(Number).sort((a,b)=>a-b)
m=m.slice(1,m.length-1)
print(m.slice(-1)[0])
print(m[0])