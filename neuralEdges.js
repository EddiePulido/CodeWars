r=readline
k=+r()
p=r().split(' ')
t=0
for(i=0;i<p.length-1;i++)t+=+p[i]* +p[i+1]
print(t)