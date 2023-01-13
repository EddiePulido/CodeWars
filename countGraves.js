r=readline
n=+r()
p=0
for(i=0;i<n;i++)p+=[...r()].filter(e=>e=='+').length
p-=4
p==0?print('0%'):print(Math.round((1/p)*100)+'%')