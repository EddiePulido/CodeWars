r=readline
c=x=>[...x].reduce((a,c)=>a*c,1)
n=c(r())%43
m=c(r())%43
print(n==m?n:-1)