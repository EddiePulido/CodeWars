let [s,e]=readline().split(' ')
c=0
while(+s<= +e){a=[...s]
c+=+(a.reduce((a,c)=>a+ +c,0)>=a.reduce((a,c)=>a*c,1))
s=(+s +1)+''}
print(c)