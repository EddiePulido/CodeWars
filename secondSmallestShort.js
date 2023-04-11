r=readline
n=+r()
for(i=0;i<n;i++)print(r().split(' ').sort((a,b) =>a-b)[1])