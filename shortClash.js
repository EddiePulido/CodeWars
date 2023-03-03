r=readline
c=+r()
a=[]
for(i=0;i<c;i++)a.push(+r())
print(Math.floor(a.reduce((b,d)=>b+d,0)/a.length))