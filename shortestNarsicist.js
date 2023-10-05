r=readline
m=+r()
n=+r()
c=0
for(j=m+1;j<n;j++){c+=+([...(j+'')].reduce((a,c,_,x)=>a+ c**x.length,0)==j)}
print(c)