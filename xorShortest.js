r=readline
m=r()
k=r()
print([...m].map((v,i)=>v^k[i%k.length]).join``)