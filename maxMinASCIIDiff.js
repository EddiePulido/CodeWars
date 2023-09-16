r=readline
n=+r()
f=Infinity
x=0
m=f
for(i=0;i<n;i++){
s=r()
for(c of s){
if(c!==' '){
a=c.charCodeAt()
x=Math.max(x,a)
m=Math.min(m,a)}}
print(x-m)
x=0
m=f}
