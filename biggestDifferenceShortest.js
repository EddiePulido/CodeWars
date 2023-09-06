r=readline
n=+r()
a=r().split(' ')
m=0
for(i=0;i<n-1;i++)m=Math.max(m,Math.abs(a[i]-a[i+1]))
print(m)
