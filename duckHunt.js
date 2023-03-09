r=readline
h=+r()
d=Array(+r()).fill(1)
for(i=0;i<h;i++)d[+r()]--
print(d.filter(e=>e==1).length)