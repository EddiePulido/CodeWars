r=readline
r()
a=readline().split(' ').reduce((a,c)=>(a[c]=++a[c]||1,a),{})
c=0
for(e in a)if(a[e]>1)c++
print(c)