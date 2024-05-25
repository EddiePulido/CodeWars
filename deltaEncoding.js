r=readline
N=+r()
d=r().split(' ')
x=d.reduce((a,c,i)=>[...a,i==0?c:c-d[i-1]],[]).join(' ')
print(x.trim()==0?'None':x)