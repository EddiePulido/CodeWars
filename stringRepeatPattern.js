r=readline
w=r()
c=r()
l=w.length
for(i=1;i<=l;i++)print(w.slice(0,i)+c.repeat(l-i))