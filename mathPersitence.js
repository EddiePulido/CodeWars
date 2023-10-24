n=[...readline()]
c=0
while(n.length>1)(n=[...(n.reduce((a,c)=>a*c,1)+'')],c++)
print(c)