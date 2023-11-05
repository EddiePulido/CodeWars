r=readline
var [a,b]=[...r()]
var [h,w,m,d]=r().split(' ')
for(i=0;i<h;i++){s=''
for(j=0;j<w;j++)s+=(i+j)%m==d?b:a
print(s)}