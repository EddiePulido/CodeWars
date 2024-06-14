r=readline
n=+r()
m={}
for(i=0;i<n;i++){var [c,x]=readline().split(' ')
m[c]=x}
l=[...r()].reduce((a,c)=>(a[c]=++a[c]||1,a),{})
print(Object.entries(l).reduce((a,[k,v])=>a+Math.floor(v/m[k]),0))