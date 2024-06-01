s=readline()
t=c=0
for(n of s)!isNaN(n)?c+=n:(t+= +c,c='')
t+= +c
print(t)
